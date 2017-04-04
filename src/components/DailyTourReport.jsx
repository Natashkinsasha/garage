import React from 'react';
import {Form, Table, Header, Input, Grid} from 'semantic-ui-react';

const DailyTourReport = () => {
    return (
        <Form>
            <Header textAlign='center' size='tiny'>
                Строительная машина
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Наименование</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Марка</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Инвентарный номер</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header textAlign='center' size='tiny'>
                            Машинист
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
                    <Grid.Column width={4}>
                        <Header textAlign='center' size='tiny'>
                            Стажёр
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
                    <Grid.Column width={8}>
                        <Header textAlign='center' size='tiny'>
                            Стропальщик
                            <Table size='small' celled structured>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'>Фамилия, инициалы</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Номер удоставверения</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Проверил</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                        <Table.Cell><Input fluid/></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Header textAlign='center' size='tiny'>
                Арендатор
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
                Задание машинисту
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Время</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Количество дней работы</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Итого машино часов
                                работы</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>начало работ</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>окончания работ</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>

            <Header textAlign='center' size='tiny'>
                Движение топливо-смозочных материалов
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan="4" textAlign='center'>Заправка ТСМ</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Остаток</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Израсходавано</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Дата</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Марка ТСМ</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Количество</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Заправщик</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Перед началом работы</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>По окончанию работы</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Фактически</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>По норме</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'л'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>
        </Form>
    );
};

export default DailyTourReport;