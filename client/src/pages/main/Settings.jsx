import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Button, Divider, ActionIcon, Switch } from '@mantine/core';

import {
    IconDotsVertical,
    IconLogin,
    IconPencil,
    IconCloudLockOpen,
    IconSettings,
    IconSun,
    IconMoonStars,
} from '@tabler/icons';

import { Section, ThemeChangeButton } from '../../components';

export function Settings() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, dispatch]);

    return (
        <>
            <Section className='heading'>
                <h1>Settings</h1>
            </Section>

            <ThemeChangeButton>
                {(theme) => (
                    <Switch
                        size='md'
                        onLabel={'Dark'}
                        offLabel={'Light'}
                        checked={theme === 'dark' ? true : false}
                        onChange={() => {}}
                        label={`Change to ${theme === 'dark' ? 'light' : 'dark'}`}
                    />
                )}
            </ThemeChangeButton>
        </>
    );
}

export default Settings;
