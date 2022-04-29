import { useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features';

import { Group, Button, Text, Switch, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';

import { DotsVertical, Login, Pencil, CloudLockOpen, Settings, Sun, MoonStars } from 'tabler-icons-react';

import { Section, ChangeThemeWrapper } from '../../components';

export const CreateEvent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

    const form = useForm({
        initialValues: {
            name: '',
            users: '',
            date: '',
            location: '',
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
                <h1>Create event</h1>
            </Section>

            <Section>
                <Group
                    component='form'
                    pt='md'
                    direction='column'
                    align='stretch'
                    spacing='sm'
                    onSubmit={form.onSubmit((values) => {
                        console.log(values);
                    })}
                >
                    <Text>Change your password</Text>
                    <TextInput label='event name' {...form.getInputProps('name')} />
                    <TextInput label='users' {...form.getInputProps('users')} />
                    <TextInput label='location' {...form.getInputProps('location')} />
                    <DatePicker label='date' {...form.getInputProps('date')} />
                    <Button type='submit'>Submit</Button>
                </Group>
            </Section>
        </>
    );
};

export default CreateEvent;
