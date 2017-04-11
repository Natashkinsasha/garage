import React from 'react';
import {Table, Checkbox, Button, Dimmer, Loader, Segment, Modal, Form, Grid} from 'semantic-ui-react';
import without from 'lodash/without';
import concat from 'lodash/concat';
class WorkerTable  extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            selectedWorkers: [],
        }
    }

    onClickCheckbox = (id) => {
        let newSelected;
        if (this.state.selectedWorkers.includes(id)){
            newSelected = without(this.state.selectedWorkers, id);
        } else{
            newSelected = concat(this.state.selectedWorkers, id);
        }
        this.setState({ selectedWorkers: newSelected });
        this.props.onSelected(newSelected);
    };




    render() {
        return (
            <Table size="small" celled selectable tableData={this.props.workers}
                   headerRow={<WorkersTableHeader/>}
                   footerRow={<WorkersTableFooter onDeleteWorkers={this.props.onDeleteWorkers}/>}
                   renderBodyRow={(data, index) => {
                       return <WorkersTableRow key={data.id} worker={data} id={data.id} onClick={this.props.onRowClick}
                                               onClickCheckbox={this.onClickCheckbox}/>;
                   }}
            />
        )
    }
}

export default WorkerTable;


const WorkersTableHeader = ({onClickCheckbox}) => {
    return (
        <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Фамилия, инициалы</Table.HeaderCell>
            <Table.HeaderCell>Должности</Table.HeaderCell>
        </Table.Row>
    );
};


const WorkersTableRow = ({worker, id, onClick, onClickCheckbox}) => {
    return (
        <Table.Row onClick={() => {
            onClick(id);
        }}>
            <Table.Cell><Checkbox onClick={(e) => {
                e.stopPropagation();
                onClickCheckbox(id);
            }}/></Table.Cell>
            <Table.Cell>{worker.firstName}</Table.Cell>
            <Table.Cell>{worker.positions}</Table.Cell>
        </Table.Row>
    );
};

const WorkersTableFooter = ({onDeleteWorkers}) => {
    return (
        <Table.Row>
            <Table.HeaderCell colSpan='4'>
                <Button size='small' positive>Добавить работника</Button>
                <Button size='small' negative onClick={onDeleteWorkers}>Удалить работников</Button>
            </Table.HeaderCell>
        </Table.Row>
    );
};
