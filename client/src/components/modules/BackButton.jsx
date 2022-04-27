import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ActionIcon, Center, Container } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';

import { Tooltip } from '../index';

export function BackButton({ to, tip, ...props }) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(to || -1);
    };

    return (
        <Tooltip tip={tip || 'Go back'} className='go-back-button' position='right' placement='center'>
            <ActionIcon onClick={onClick} size={'lg'} {...props}>
                <IconArrowLeft />
            </ActionIcon>
        </Tooltip>
    );
}

export default BackButton;
