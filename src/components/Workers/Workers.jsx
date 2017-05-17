import React from 'react';
import {connect} from 'react-redux';
import Promise from 'bluebird';
import R from 'ramda';
import * as workerApi from '../../api/worker';

import {Table, Checkbox, Button, Dimmer, Loader, Segment, Modal, Form, Grid, Message} from 'semantic-ui-react';

import WorkerCard from './WorkerCard.jsx';
import WorkerTable from './WorkerTable.jsx';
import CreateWorkerModal from './CreateWorkerModal.jsx';
import {addPositions} from '../../actions/positions'

import find from 'lodash/find';

class Workers extends React.Component {

    constructor(props) {
        super(props);
        this.setStateAsync = Promise.promisify(this.setState);
        this.state = {
            isActiveWorkerTable: false,
            selectedWorker: null,
            selectedWorkers: [],
            workers: [],
            pageSize: 10,
            currentPage: 1,
            pages: 0,
            visibleMessageError: false,
            openCreateWorkerModal: false,
            isLoaderWorkerModal: false,
        }
    }

    componentDidMount = () => {
        this.onChange({currentPage: this.state.currentPage, pageSize: this.state.pageSize});
    };


    deleteWorkers = () => {
        return this.setState({isActiveWorkerTable: true}, () => {
            return Promise
                .resolve(this.state.selectedWorkers)
                .then(R.pluck('id'))
                .then(this.props.deleteWorkers)
                .then((res) => {
                    return this.getWorkers({currentPage: 1, pageSize: this.state.pageSize})
                })
                .catch((res) => {

                })
                .finally(() => {
                    this.setState({isActiveWorkerTable: false});
                })

        });

    };

    addWorker = () => {
        this.props.loadPositions();
        this.setState({openCreateWorkerModal: true});
    };

    getWorkers = ({currentPage, pageSize, sortedColumn, direction}) => {
        return this.setStateAsync({isActiveWorkerTable: true, visibleMessageError: false})
            .then(() => {
                return this.props.getWorkers({page: currentPage, number: pageSize, sortedColumn, direction})
            })
            .then(({docs, page, pages, limit}) => {
                    this.setState({
                        workers: docs,
                        pageSize: limit,
                        currentPage: page,
                        sortedColumn,
                        direction,
                        pages,
                        selectedWorker: docs[0],
                    })
                },
                () => {
                    this.setState({visibleMessageError: true});
                })
            .finally(() => {
                this.setState({isActiveWorkerTable: false});
            })
    };

    onSelectWorker = (id) => {
        this.setState({selectedWorker: find(this.state.workers, {'id': id})})
    };

    onSelectedWorkers = (selected) => {
        this.setState({selectedWorkers: selected});
    };

    onChange = ({currentPage, pageSize, sortedColumn, direction}) => {
        return this.getWorkers({currentPage, pageSize, sortedColumn, direction})
    };

    onChangeWorker = (worker) => {
        this.setState({worker: {...this.state.worker, ...worker}})
    };

    createWorker = () => {
        return this.setStateAsync({isLoaderWorkerModal: true})
            .then(() => this.props.createWorker(this.state.worker))
            .then(() => {
                this.setState({openCreateWorkerModal: false});
                return this.getWorkers({currentPage: 1, pageSize: this.state.pageSize})
            })
            .finally(() => {
                return this.setState({isLoaderWorkerModal: false});
            })
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <NegativeMessage visible={this.state.visibleMessageError}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <Segment>
                            <Dimmer active={this.state.isActiveWorkerTable} inverted>
                                <Loader />
                            </Dimmer>
                            <WorkerTable workers={this.state.workers}
                                         pageSize={this.state.pageSize}
                                         currentPage={this.state.currentPage}
                                         pages={this.state.pages}
                                         sortedColumn={this.state.sortedColumn}
                                         direction={this.state.direction}
                                         onRowClick={this.onSelectWorker}
                                         onSelected={this.onSelectedWorkers}
                                         onDeleteWorkers={this.deleteWorkers}
                                         onAddWorker={this.addWorker}
                                         onChange={this.onChange}
                                         selectedWorker={this.state.selectedWorker}
                            />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <WorkerCard worker={this.state.selectedWorker}/>
                    </Grid.Column>
                </Grid.Row>
                <CreateWorkerModal open={this.state.openCreateWorkerModal}
                                   positions={this.props.positions}
                                   onChange={this.onChangeWorker}
                                   isLoader={this.state.isLoaderWorkerModal}
                                   onCancel={() => {
                                       this.setState({openCreateWorkerModal: false});
                                   }}
                                   onCreate={this.createWorker}
                />
            </Grid>
        )
    }

}

export default connect(store => {
        return {
            positions: store.positionsState.positions,
        }
    },
    (dispatch, props) => {
        return {
            createWorker: (worker) => {
                return workerApi.create(worker);
            },
            updateWorker: (worker) => {
                return workerApi.update(worker);
            },
            deleteWorkers: (ids) => {
                return workerApi.remove(ids);
            },
            getWorkers: ({page, number, sortedColumn, direction}) => {
                return workerApi.get({page, number, sortedColumn, direction}).get('data');
            },
            loadPositions: () => {
                if (!props.positions) {
                    return workerApi
                        .getPositions()
                        .get('data')
                        .get('positions')
                        .then((positions) => {
                            return dispatch(addPositions(positions))
                        })
                }
            },
        }
    })(Workers);


const NegativeMessage = ({visible}) => {
    if (visible) {
        return (
            <Message negative visible>
                <Message.Header>Ошибка сервера</Message.Header>
                <p>Попробуйте перезагрузить страницу</p>
            </Message>
        )
    }
    return (<div></div>)
};



