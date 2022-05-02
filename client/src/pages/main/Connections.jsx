import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features';

import { Select, Avatar, Table, Group, Text, ActionIcon, Menu, ScrollArea, Button } from '@mantine/core';
import { Pencil, Messages, Note, ReportAnalytics, Trash } from 'tabler-icons-react';

import { Title, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Section } from '../../components';

const data = [
    {
        avatar: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        name: 'Robert Wolfkisser',
        job: 'Engineer',
        email: 'rob_wolf@gmail.com',
        rate: 22,
    },
    {
        avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        name: 'Jill Jailbreaker',
        job: 'Engineer',
        email: 'jj@breaker.com',
        rate: 45,
    },
    {
        avatar: 'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        name: 'Henry Silkeater',
        job: 'Designer',
        email: 'henry@silkeater.io',
        rate: 76,
    },
    {
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        name: 'Bill Horsefighter',
        job: 'Designer',
        email: 'bhorsefighter@gmail.com',
        rate: 15,
    },
    {
        avatar: 'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
        name: 'Jeremy Footviewer',
        job: 'Manager',
        email: 'jeremy@foot.dev',
        rate: 98,
    },
];

export const Connections = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const rows = data.map((item) => (
        <tr key={item.name}>
            <td>
                <Group spacing='sm'>
                    <Avatar size={40} src={item.avatar} radius={40} />
                    <div>
                        <Text size='sm' weight={500}>
                            {item.name}
                        </Text>
                        <Text color='dimmed' size='xs'>
                            {item.job}
                        </Text>
                    </div>
                </Group>
            </td>
            <td>
                <Text size='sm'>{item.email}</Text>
                <Text size='xs' color='dimmed'>
                    Email
                </Text>
            </td>
            <td>
                <Text size='sm'>${item.rate.toFixed(1)} / hr</Text>
                <Text size='xs' color='dimmed'>
                    Rate
                </Text>
            </td>
            <td>
                <Group spacing={0} position='right'>
                    <ActionIcon>
                        <Pencil size={16} />
                    </ActionIcon>
                    <Menu transition='pop' withArrow placement='end'>
                        <Menu.Item icon={<Messages size={16} />}>Send message</Menu.Item>
                        <Menu.Item icon={<Note size={16} />}>Add note</Menu.Item>
                        <Menu.Item icon={<ReportAnalytics size={16} />}>Analytics</Menu.Item>
                        <Menu.Item icon={<Trash size={16} />} color='red'>
                            Terminate contract
                        </Menu.Item>
                    </Menu>
                </Group>
            </td>
        </tr>
    ));

    const form = useForm({
        initialValues: {
            user: '',
        },
    });

    const addConnection = (e) => {
        e.preventDefault();
        console.log(e.target);
        // dispatch(updateUser({ connections: [''] }));
    };
    return (
        <>
            <Section>
                <Title>Connections</Title>
            </Section>

            <Section>
                <ScrollArea>
                    <Table sx={{ minWidth: 800 }} verticalSpacing='md'>
                        <tbody>{rows}</tbody>
                    </Table>
                </ScrollArea>
            </Section>
            <Section>
                <Button onClick={() => setIsModalOpen(true)}>add a connection</Button>
            </Section>

            <Modal
                opened={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                centered
                title='Search a user'
                size='lg'
            >
                <form
                    onSubmit={form.onSubmit((values) => {
                        dispatch(updateUser({ connections: [values.user] }));
                    })}
                >
                    <Select
                        label='Your favorite framework/library'
                        placeholder='Pick one'
                        data={[{ value: 'test@test', label: 'test' }]}
                        {...form.getInputProps('user')}
                    />
                    <Button type='submit'>Add</Button>
                </form>
            </Modal>
        </>
    );
};

export default Connections;
