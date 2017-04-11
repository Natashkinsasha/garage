import React from 'react';
import {
    Card,
    Button,
    Item,
    Feed,
    Divider
} from 'semantic-ui-react';
import {connect} from 'react-redux';

import join from 'lodash/join';
import includes from 'lodash/includes';

import {push, goBack} from 'react-router-redux';

const WorkerCard = ({worker}) => {
    if (worker) {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        {worker.firstName} {worker.secondName}
                    </Card.Header>
                    <Card.Meta>
                        {worker.gender === true ? 'Мужчина' : worker.gender === false ? 'Женщина' : '--/--'}
                    </Card.Meta>
                    <Divider/>
                    <Card.Description>
                        <Feed>
                            <Feed.Event>
                                <Feed.Content>
                                    <Feed.Summary>
                                        Должности
                                    </Feed.Summary>
                                    <Feed.Extra text>
                                        {join(worker.positions, ', ') || '--/--'}
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>
                            <Feed.Event>
                                <Feed.Content>
                                    <Feed.Summary>
                                        Телефон
                                    </Feed.Summary>
                                    <Feed.Extra text>
                                        {worker.telephone || '--/--'}
                                    </Feed.Extra>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button basic fluid color='green'>Редактировать</Button>
                </Card.Content>
            </Card>
        )
    }
    return (
        <div></div>
    )
};

export default WorkerCard;
