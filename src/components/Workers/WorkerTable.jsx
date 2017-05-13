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
            checkeds: [],
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
        this.props.onChange({
            currentPage: this.props.currentPage,
            pageSize,
            sortedColumn: this.props.sortedColumn,
            direction: this.props.direction
        });
    };

    onChangeCurrentPage = (currentPage) => {
        this.props.onChange({
            currentPage,
            pageSize: this.props.pageSize,
            sortedColumn: this.props.sortedColumn,
            direction: this.props.direction
        });
    };

    onChangeSort = (sortedColumn, direction) => {
        this.props.onChange({
            currentPage: this.props.currentPage,
            pageSize: this.props.pageSize,
            sortedColumn,
            direction,
        });
    };


    render() {
        return (
            <div>
                <Table size="small" celled selectable tableData={this.props.workers}
                       headerRow={<WorkersTableHeader checkeds={this.state.checkeds}
                                                      onClickCheckbox={this.onClickHeaderCheckbox}
                                                      onChangeSort={this.onChangeSort}
                       />}
                       footerRow={<WorkersTableFooter onDeleteWorkers={this.props.onDeleteWorkers}
                                                      pages={this.props.pages}
                                                      pageSize={this.props.pageSize}
                                                      currentPage={this.props.currentPage}
                                                      onChangePageSize={this.onChangePageSize}
                                                      onChangeCurrentPage={this.onChangeCurrentPage}
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
            <Table.HeaderCell><Checkbox checked={!isEmpty(checkeds) && !checkeds.includes(false)} onClick={(e) => {
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

const WorkersTableFooter = ({onDeleteWorkers, pages, pageSize, currentPage, onChangePageSize, onChangeCurrentPage}) => {
    return (
        <Table.Row>
            <Table.HeaderCell colSpan='4'>
                <Button size='small' positive>Добавить работника</Button>
                <Button size='small' negative onClick={onDeleteWorkers}>Удалить работников</Button>
                <Input value={pageSize} onChange={(e, data) => {
                    onChangePageSize(data.value);
                }}></Input>
                <Pagination pages={pages} currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
            </Table.HeaderCell>
        </Table.Row>
    );
};


const Pagination = ({pages, currentPage, onChangeCurrentPage}) => {
    if (pages > 1) {
        const baginBtn = [];
        for (let i = 1; i <= pages; i++) {
            baginBtn.push(<Menu.Item key={i} active={i === currentPage} as='a' onClick={() => {
                return onChangeCurrentPage(i);
            }}>{i}</Menu.Item>)
        }
        return (
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon disabled={currentPage === 1} onClick={() => {
                    return onChangeCurrentPage(currentPage - 1);
                }}>
                    <Icon name='left chevron'/>
                </Menu.Item>
                {baginBtn}
                <Menu.Item as='a' icon disabled={currentPage === pages} onClick={()=>{
                    return onChangeCurrentPage(currentPage + 1);
                }}>
                    <Icon name='right chevron'/>
                </Menu.Item>
            </Menu>
        )
    }
    return <div/>;
};