import React from 'react';
import {Button, Header, Icon, Image, Modal} from 'semantic-ui-react'

import WorkerForm from './Worker/WorkerForm.jsx';

const CreateWorkerModal = ({...props, open, onCreate, onCancel}) => {
    return (
        <Modal open={open} onClose={onCancel}>
            <Modal.Header>Создание работника</Modal.Header>
            <Modal.Content>
                <WorkerForm {...props}/>
            </Modal.Content>
            <Modal.Actions>
                <Button positive onClick={onCreate}>Отправить</Button>
                <Button color='orange' onClick={onCancel}>Назад</Button>
            </Modal.Actions>
        </Modal>
    )
};

export default CreateWorkerModal;
