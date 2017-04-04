import React from 'react';
import {Form, Segment, Table, Input, Grid, Header} from 'semantic-ui-react';

const Waybill = () => {
    return (
        <Form>
            <Grid doubling columns={2}>
                <Grid.Column>
                    <Header textAlign='center' size='tiny'>
                        Водитель
                        <Table size='small' celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>Фамилия, инициалы</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Табельный номер, класс</Table.HeaderCell>
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
                </Grid.Column>
                <Grid.Column>
                    <Header textAlign='center' size='tiny'>
                        Автомобиль, прицеп, полуприцеп
                        <Table size='small' celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>Марка автомобиля</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Регистрационный знак</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Гаражный номер</Table.HeaderCell>
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
            </Grid>
            <Header textAlign='center' size='tiny'>
                Работа водителя и автомобиля
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Операции</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Показазания спидометра</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Дата и время</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Нулевой пробег</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Время работы</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>По графику</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Фактически</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Двигателя</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Спецоборудования</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Выезд на линию</Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'км'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'час'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'час'}}
                                               labelPosition='right'/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Возвращение с линии</Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'км'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'час'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'час'}}
                                               labelPosition='right'/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>
            <Header textAlign='center' size='tiny'>
                Движение топливо-смозочных материалов
                <div>
                    <Table size='small' attached celled structured>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="3" textAlign='center'>Заправка ТСМ</Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>Дата</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>Марка ТСМ</Table.HeaderCell>
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

                    <Table size='small' attached celled structured>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="2" textAlign='center'>Остаток ТСМ</Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>При выезде</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>При возвращении</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Input fluid label={{basic: true, content: 'л'}}
                                                   labelPosition='right'/></Table.Cell>
                                <Table.Cell><Input fluid label={{basic: true, content: 'л'}}
                                                   labelPosition='right'/></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </Header>
            <Header textAlign='center' size='tiny'>
                Задание водителю
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Заказчик</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Дата и время</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Пунт отправления</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Пункт назначение</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Расстояние</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Наименование груза</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Вес груза</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Количество ездок</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Прибытие</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Убытие</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'км'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'т'}}
                                               labelPosition='right'/></Table.Cell>
                            <Table.Cell><Input fluid label={{basic: true, content: 'час'}}
                                               labelPosition='right'/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Header>

            <Header textAlign='center' size='tiny'>
                Выполнение задания
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Дата</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Номер ТТН</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>Дата ТТН</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Маршут</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>Откуда</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Куда</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
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
                Результат работы
                <Table size='small' celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Расход ТСМ</Table.HeaderCell>
                            <Table.HeaderCell colSpan="4" textAlign='center'>Время в наряде</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="3" textAlign='center'>Количество ездок</Table.HeaderCell>
                            <Table.HeaderCell colSpan="4" textAlign='center'>Пробег</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Перевезено</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>Выполнено</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>по норме</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>фактически</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>автомобиля</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>прицепа</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>в том числе автомобиля</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>общий</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" textAlign='center'>в том числе с грузом</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>всего</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>в том числе на прицепе</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>всего</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" textAlign='center'>в том числе на прицепе</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>в движение</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>в простое</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>автомобиля</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>прицепа</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>автомобиля</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>прицепа</Table.HeaderCell>
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
}

export default Waybill;