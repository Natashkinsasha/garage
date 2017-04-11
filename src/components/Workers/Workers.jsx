import React from 'react';
import {connect} from 'react-redux';
import Promise from 'bluebird';

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
        }
    }


    deleteWorkers = () => {
        this.setState({isActiveWorkersTable: true});
        this.props.deleteWorkers(this.state.selectedWorkers).then(() => {
            this.setState({isActiveWorkersTable: false});
        });
    };

    onSelectWorker = (id) => {
        this.setState({selectedWorker: find(this.props.workers, {'id': id})})
    };

    onSelectedWorkers = (workers) => {
        this.setState({selectedWorkers: workers});
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <Segment>
                            <Dimmer active={this.state.isActiveWorkersTable} inverted>
                                <Loader />
                            </Dimmer>
                            <WorkerTable workers={this.props.workers}
                                         onRowClick={this.onSelectWorker}
                                         onSelected={this.onSelectedWorkers}
                                         onDeleteWorkers={this.deleteWorkers}
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

export default connect(state => {
    return {
        workers: [
            {id: 0, positions: ['driver']},
            {id: 1, firstName: 'Петров', secondName: 'Петр', positions: ['rigger', 'mechanic']},
            {id: 2, firstName: 'Никитич', secondName: 'Никита', positions: ['machinist']},
            {id: 3, firstName: 'Наташкна', secondName: 'Наталья', positions: ['accountant']},
        ]
    }
}, dispatch =>{
    return {
        deleteWorkers: ()=>{
            return Promise.resolve().delay(1000);
        }
    }
})(Workers);



