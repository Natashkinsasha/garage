import React from 'react';
import {
    Table,
    Checkbox,
    Button,
    Dimmer,
    Loader,
    Segment,
    Modal,
    Form,
    Input,
    Grid,
    Menu,
    Icon,
    Dropdown
} from 'semantic-ui-react';
import without from 'lodash/without';
import concat from 'lodash/concat';
import isEmpty from 'lodash/isEmpty';
import clone from 'lodash/clone';


class WorkerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkeds: Array.apply(null, {length: this.props.workers.length}).fill(false),
            pageSize: 4,
        }
    }

    onClickCheckbox = (index) => {
        let newSelected = clone(this.state.checkeds);
        if (newSelected[index]) {
            newSelected[index] = false;
        } else {
            newSelected[index] = true;
        }
        this.setState({checkeds: newSelected});
        this.props.onSelected(newSelected);
    };

    onClickHeaderCheckbox = () => {
        let newSelected = [];
        if (this.state.checkeds.includes(true)) {
            newSelected = Array.apply(null, {length: this.props.workers.length}).fill(false);
        } else {
            newSelected = Array.apply(null, {length: this.props.workers.length}).fill(true);
        }
        this.setState({checkeds: newSelected});
        this.props.onSelected(newSelected);

    };

    onChangePageSize = (pageSize) => {
        console.log('-----------');
        console.log(pageSize);
        this.setState({pageSize: ''});
    }


    render() {
        return (
            <div>
                <Table size="small" celled selectable tableData={this.props.workers}
                       headerRow={<WorkersTableHeader checkeds={this.state.checkeds}
                                                      onClickCheckbox={this.onClickHeaderCheckbox}/>}
                       footerRow={<WorkersTableFooter onDeleteWorkers={this.props.onDeleteWorkers}
                                                      size={this.props.size || this.props.workers.length}
                                                      pageSize={this.state.pageSize}
                                                      onChangePageSize={this.onChangePageSize}
                       />}
                       renderBodyRow={(data, index) => {
                           return <WorkersTableRow key={data.id} index={index} worker={data}
                                                   onClick={this.props.onRowClick}
                                                   onClickCheckbox={this.onClickCheckbox}
                                                   checked={this.state.checkeds[index]}
                           />;
                       }}
                />
            </div>
        )
    }
}

export default WorkerTable;

WorkerTable.propTypes = {
    workers: (props, propName, componentName) => {
        if (props.workers.length > props.size) {
            return new Error(
                'Size of elements should be more then size data'
            );
        }

    },
};


const WorkersTableHeader = ({onClickCheckbox, checkeds}) => {
    return (
        <Table.Row>
            <Table.HeaderCell><Checkbox checked={!checkeds.includes(false)} onClick={(e) => {
                e.stopPropagation();
                onClickCheckbox();
            }}/></Table.HeaderCell>
            <Table.HeaderCell>Фамилия, инициалы</Table.HeaderCell>
            <Table.HeaderCell>Должности</Table.HeaderCell>
        </Table.Row>
    );
};


const WorkersTableRow = ({worker, index, onClick, onClickCheckbox, checked}) => {
    return (
        <Table.Row onClick={() => {
            onClick(worker.id);
        }}>
            <Table.Cell><Checkbox checked={checked} onClick={(e) => {
                e.stopPropagation();
                onClickCheckbox(index);
            }}/></Table.Cell>
            <Table.Cell>{worker.firstName}</Table.Cell>
            <Table.Cell>{worker.positions}</Table.Cell>
        </Table.Row>
    );
};

const WorkersTableFooter = ({onDeleteWorkers, size, pageSize, onChangePageSize}) => {
    return (
        <Table.Row>
            <Table.HeaderCell colSpan='4'>
                <Button size='small' positive>Добавить работника</Button>
                <Button size='small' negative onClick={onDeleteWorkers}>Удалить работников</Button>
                <Input value={pageSize} onChange={(e, data) => {
                    console.log(data)
                    console.log(onChangePageSize)
                    onChangePageSize(data.value);
                }}></Input>
                <Pagination number={Math.ceil(size / pageSize)}/>
            </Table.HeaderCell>
        </Table.Row>
    );
};


const Pagination = ({number}) => {
    const baginBtn = [];
    for (let i = 1; i <= number; i++) {
        baginBtn.push(<Menu.Item key={i} as='a'>{i}</Menu.Item>)
    }
    if (number > 1) {
        return (
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                    <Icon name='left chevron'/>
                </Menu.Item>
                {baginBtn}
                <Menu.Item as='a' icon>
                    <Icon name='right chevron'/>
                </Menu.Item>
            </Menu>
        )
    }
    return <div/>;
};