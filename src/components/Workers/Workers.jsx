import React from 'react';
import {connect} from 'react-redux';
import Promise from 'bluebird';
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
        this.props.deleteWorkers(this.state.checkeds).then(() => {
            this.setState({isActiveWorkersTable: false});
        });
    };

    onSelectWorker = (id) => {
        this.setState({selectedWorker: find(this.props.workers, {'id': id})})
    };

    onSelectedWorkers = (selected) => {
        this.setState({selectedWorkers: selected});
    };

    onChange = ({currentPage, pageSize, sortedColumn, direction}) => {
        console.log({currentPage, pageSize, sortedColumn, direction})
        this.setState({isActiveWorkerTable: true}, () => {
            this.props.getWorkers({page: currentPage, number: pageSize})
                .then(({docs, page, pages, limit}) => {
                    this.setState({
                        workers: docs,
                        pageSize: limit,
                        currentPage: page,
                        pages,
                    })
                })
                .finally(() => {
                    this.setState({isActiveWorkerTable: false});
                })
        });
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
        deleteWorkers: () => {
            return Promise.resolve().delay(1000);
        },
        getWorkers: ({page, number}) => {
            return workerApi.get({page, number}).get('data');
        }
    }
})(Workers);



