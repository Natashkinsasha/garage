import React from 'react';
import {Button, Icon} from 'semantic-ui-react'
const SocialButton = () => {
    return (
        <Button.Group widths='2'>
            <Button color='vk'>
                <Icon name='vk'/> VK
            </Button>
            <Button color='facebook'>
                <Icon name='facebook'/> Facebook
            </Button>
        </Button.Group>
    )
};

export default SocialButton;
