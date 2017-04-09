import React from 'react';
import {Table, Input, Form, Header, Grid} from 'semantic-ui-react';
import NumberPicker from 'semantic-ui-react-numberpicker';

const Worksheet = () => {
    return (
        <Form>
            <Grid doubling columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign='center' size='tiny'>
                            Механизм
                            <Table size='small' celled structured>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'>Наименование</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header textAlign='center' size='tiny'>
                            Выдано прорабу, мастеру
                            <Table size='small' celled structured>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'>Фамилия, инициалы</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign='center' size='tiny'>
                            Работающий
                            <Table size='small' celled structured>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'>Фамилия, инициалы</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header textAlign='center' size='tiny'>
                            Механизм выдал
                            <Table size='small' celled structured>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'>Фамилия, инициалы</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Header textAlign='center' size='tiny'>
                Объект работ
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Наименование</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Адрес</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>

            <Header textAlign='center' size='tiny'>
                Заправка горюче-смазочных материалов
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Марка ГСМ</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Дата заправки</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Количество</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'л'}}
                                               labelPosition='right'/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>

            <Header textAlign='center' size='tiny'>
                Время работы на объекте
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Дата</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Время работы</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Отработано всего</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Моточасы</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Количество замесов</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Количество кубов</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Израсходовано топлива</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Остаток топлива</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Начало</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Окончание</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Всего</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>На 1 м3</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>На начало дня</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>На конец дня</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>

            <Header textAlign='center' size='tiny'>
                Расход ГСМ
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Марка ГСМ</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>По норме</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Фактически</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'л'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'л'}}
                                               labelPosition='right'/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>
        </Form>
    );
};

export default Worksheet;