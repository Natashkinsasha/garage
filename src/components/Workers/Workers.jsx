import React from 'react';
import {connect} from 'react-redux';
import Promise from 'bluebird';
import R from 'ramda';
import * as workerApi from '../../api/worker';

import {Table, Checkbox, Button, Dimmer, Loader, Segment, Modal, Form, Grid} from 'semantic-ui-react';

import WorkerCard from './WorkerCard.jsx';
import WorkerTable from './WorkerTable.jsx';

import find from 'lodash/find';

class Workers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActiveWorkerTable: false,
            selectedWorker: null,
            selectedWorkers: [],
            workers: [],
            pageSize: 10,
            currentPage: 1,
            pages: 0,
        }
    }

    componentDidMount = () => {
        this.onChange({currentPage: this.state.currentPage, pageSize: this.state.pageSize});
    };


    deleteWorkers = () => {
        this.setState({isActiveWorkersTable: true});
        Promise
            .resolve(this.state.selectedWorkers)
            .then(R.pluck('id'))
            .then(this.props.deleteWorkers)
            .catch((res) => {

            })
            .finally(() => {
                this.setState({isActiveWorkerTable: false});
            })
            .then((res) => {
                return this.getWorkers({currentPage: 1, pageSize: this.state.pageSize})
            })
    };

    getWorkers = ({currentPage, pageSize, sortedColumn, direction}) => {
        console.log({currentPage, pageSize, sortedColumn, direction})
        this.setState({isActiveWorkerTable: true}, () => {
            this.props.getWorkers({page: currentPage, number: pageSize, sortedColumn, direction})
                .then(({docs, page, pages, limit}) => {
                    this.setState({
                        workers: docs,
                        pageSize: limit,
                        currentPage: page,
                        sortedColumn,
                        direction,
                        pages,
                    })
                })
                .finally(() => {
                    this.setState({isActiveWorkerTable: false});
                })
        });
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

    render() {
        return (
            <Grid>
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
                                         onChange={this.onChange}
                            />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <WorkerCard worker={this.state.selectedWorker}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}

export default connect(null, dispatch => {
    return {
        deleteWorkers: (ids) => {
            return workerApi.remove(ids);
        },
        getWorkers: ({page, number, sortedColumn, direction}) => {
            return workerApi.get({page, number, sortedColumn, direction}).get('data');
        }
    }
})(Workers);



