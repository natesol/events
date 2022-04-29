import { useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features';

import { useMantineColorScheme, Group, Button, PasswordInput, Text, Switch } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';

import {
    DotsVertical,
    Login,
    Pencil,
    CloudLockOpen,
    Settings as SettingsIcon,
    Sun,
    MoonStars,
} from 'tabler-icons-react';

import { Section } from '../../components';

export const Settings = () => {
    const { toggleColorScheme } = useMantineColorScheme();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

    const { colorScheme } = useMantineColorScheme();

    const form = useForm({
        initialValues: {
            password: '',
            password2: '',
        },
    });

    useMemo(() => {
        if (isError) {
            showNotification({
                title: 'Something went wrong',
                message,
                color: 'red',
            });
        } else if (isSuccess) {
            showNotification({
                title: 'Hooray!',
                message: 'Password updated successfully.',
                color: 'green',
            });
        }
    }, [isError, isSuccess, message]);

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

            <Switch
                size='md'
                onLabel={'Dark'}
                offLabel={'Light'}
                checked={colorScheme === 'dark' ? true : false}
                onChange={() => toggleColorScheme()}
                label={`Change to ${colorScheme === 'dark' ? 'light' : 'dark'}`}
            />

            <Section>
                <Group
                    component='form'
                    pt='md'
                    direction='column'
                    align='stretch'
                    spacing='sm'
                    onSubmit={form.onSubmit((values) => {
                        dispatch(updateUser({ password: values.password }));
                    })}
                >
                    <Text>Change your password</Text>
                    <PasswordInput placeholder='New password' {...form.getInputProps('password')} />
                    <PasswordInput placeholder='Repeat password' {...form.getInputProps('password2')} />
                    <Button type='submit'>Submit</Button>
                </Group>
            </Section>
        </>
    );
};

export default Settings;
