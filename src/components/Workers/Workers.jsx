import React from 'react';
import {connect} from 'react-redux';

import {Table, Checkbox, Button, Dimmer, Loader, Segment, Modal, Form, Grid} from 'semantic-ui-react';

import WorkerInfoPanel from './WorkerInfoPanel.jsx';
class Workers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActiveWorkerTable: false
        }
    }


    deleteWorkers = (ids) => {
        this.setState({isActiveWorkersTable: false});
        this.props.deleteWorkers(ids).then(() => {
            this.setState({isActiveWorkersTable: true});
        });
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
                            <WorkersTable workers={this.props.workers}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <WorkerInfoPanel/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}

export default connect(state => {
    return {
        workers: [
            {firstName: 'Иванов', secondName: 'Иван', positions: ['driver']},
            {firstName: 'Петров', secondName: 'Петр', positions: ['rigger', 'mechanic']},
            {firstName: 'Никитич', secondName: 'Никита', positions: ['machinist']},
            {firstName: 'Наташкна', secondName: 'Наталья', positions: ['accountant']},
        ]
    }
})(Workers);

const WorkersTable = ({workers}) => {
    return (
        <Table size="small" celled selectable tableData={workers}
               headerRow={<WorkersTableHeader/>}
               footerRow={<WorkersTableFooter/>}
               renderBodyRow={(data, index) => {
                   return <WorkersTableRow worker={data} key={index}/>;
               }}/>
    )
};


const WorkersTableHeader = () => {
    return (
        <Table.Row>
            <Table.HeaderCell><Checkbox/></Table.HeaderCell>
            <Table.HeaderCell>Фамилия, инициалы</Table.HeaderCell>
            <Table.HeaderCell>Должности</Table.HeaderCell>
        </Table.Row>
    );
};


const WorkersTableRow = ({worker, key}) => {
    return (
        <Table.Row key={key} onClick={() => {
        }}>
            <Table.Cell><Checkbox onClick={(e) => {
                e.stopPropagation();
            }}/></Table.Cell>
            <Table.Cell>{worker.firstName}</Table.Cell>
            <Table.Cell>{worker.positions}</Table.Cell>
        </Table.Row>
    );
};

const WorkersTableFooter = () => {
    return (
        <Table.Row>
            <Table.HeaderCell colSpan='4'>
                <Button size='small' positive>Добавить работника</Button>
                <Button size='small' negative>Удалить работников</Button>
            </Table.HeaderCell>
        </Table.Row>
    );
};

