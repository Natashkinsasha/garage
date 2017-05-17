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
import reduce from 'lodash/reduce';
import fill from 'lodash/fill';
import isEmpty from 'lodash/isEmpty';
import clone from 'lodash/clone';
import R from 'ramda';
import PaginationMaskInput from './PaginationMaskInput.jsx';


class WorkerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkeds: fill(Array(this.props.workers.length), false),
        }
    }

    componentWillReceiveProps = (newProps) => {
        if (!R.equals(newProps.workers, this.props.workers)) {
            this.setState({checkeds: fill(Array(newProps.workers.length), false)});
        }
    };

    onClickCheckbox = (index) => {
        let newSelected = clone(this.state.checkeds);
        if (newSelected[index]) {
            newSelected[index] = false;
        } else {
            newSelected[index] = true;
        }
        this.setState({checkeds: newSelected});
        this.props.onSelected(WorkerTable.getSelectedWorkers(this.props.workers, newSelected));
    };

    onClickHeaderCheckbox = () => {
        let newSelected = [];
        if (this.state.checkeds.includes(true)) {
            newSelected = fill(Array(this.props.workers.length), false);
        } else {
            newSelected = fill(Array(this.props.workers.length), true);
        }
        this.setState({checkeds: newSelected});
        this.props.onSelected(WorkerTable.getSelectedWorkers(this.props.workers, newSelected));

    };

    onChangePageSize = (pageSize) => {
        this.props.onChange({
            currentPage: 1,
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

    pageSize = (pageSize, pages, number) => {
        if (pages === 1) {
            return number;
        }
        return pageSize;
    };

    static getSelectedWorkers(workers, selected) {
        return reduce(selected, (selectedWorkers, checked, position) => {
            if (checked) {
                selectedWorkers = [...selectedWorkers, workers[position]]
            }
            return selectedWorkers;
        }, []);
    }


    render() {
        return (
            <div>
                <Table size="small" celled selectable sortable tableData={this.props.workers}
                       headerRow={<WorkersTableHeader checkeds={this.state.checkeds}
                                                      sortedColumn={this.props.sortedColumn}
                                                      direction={this.props.direction}
                                                      onClickCheckbox={this.onClickHeaderCheckbox}
                                                      onChangeSort={this.onChangeSort}
                       />}
                       footerRow={<WorkersTableFooter onDeleteWorkers={this.props.onDeleteWorkers}
                                                      onAddWorker={this.props.onAddWorker}
                                                      pages={this.props.pages}
                                                      pageSize={this.pageSize(this.props.pageSize, this.props.pages, this.props.workers.length)}
                                                      currentPage={this.props.currentPage}
                                                      onChangePageSize={this.onChangePageSize}
                                                      onChangeCurrentPage={this.onChangeCurrentPage}
                                                      checkeds={this.state.checkeds}
                       />}
                       renderBodyRow={(data, index) => {
                           return <WorkersTableRow key={data.id} index={index} worker={data}
                                                   onClick={this.props.onRowClick}
                                                   onClickCheckbox={this.onClickCheckbox}
                                                   checked={this.state.checkeds[index]}
                                                   selectedWorker={this.props.selectedWorker}
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


const WorkersTableHeader = ({onClickCheckbox, onChangeSort, checkeds, sortedColumn, direction}) => {
    return (
        <Table.Row>
            <Table.HeaderCell><Checkbox checked={!isEmpty(checkeds) && !checkeds.includes(false)} onClick={(e) => {
                e.stopPropagation();
                onClickCheckbox();
            }}/></Table.HeaderCell>
            <Table.HeaderCell sorted={sortedColumn === 'firstName' && direction} onClick={() => {
                return onChangeSort('firstName', direction === 'ascending' ? 'descending' : 'ascending');
            }}>Фамилия, инициалы</Table.HeaderCell>
            <Table.HeaderCell>Должности</Table.HeaderCell>
        </Table.Row>
    );
};


const WorkersTableRow = ({worker, selectedWorker, index, onClick, onClickCheckbox, checked}) => {
    return (
        <Table.Row active={selectedWorker && selectedWorker.id === worker.id}
                   onClick={() => {
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

const WorkersTableFooter = ({onDeleteWorkers, onAddWorker, pages, pageSize, currentPage, onChangePageSize, onChangeCurrentPage, checkeds}) => {
    return (
        <Table.Row>
            <Table.HeaderCell colSpan='4'>
                <Button size='small' positive onClick={onAddWorker}>Добавить работника</Button>
                <Button size='small' disabled={!checkeds.includes(true)} negative onClick={onDeleteWorkers}>Удалить работников</Button>
                <PaginationMaskInput value={pageSize} onBlur={(e) => {
                    onChangePageSize(e.target.value);
                }}></PaginationMaskInput>
                <Pagination pages={pages} currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
            </Table.HeaderCell>
        </Table.Row>
    );
};


const Pagination = ({pages, currentPage, onChangeCurrentPage}) => {
    if (pages > 1) {
        const baginBtn = [];
        for (let i = 1; i <= pages; i++) {
            baginBtn.push(<Menu.Item key={i} disabled={i === currentPage} active={i === currentPage} as='a' onClick={() => {
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
                <Menu.Item as='a' icon disabled={currentPage === pages} onClick={() => {
                    return onChangeCurrentPage(currentPage + 1);
                }}>
                    <Icon name='right chevron'/>
                </Menu.Item>
            </Menu>
        )
    }
    return <div/>;
};