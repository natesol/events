/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - App Header -------------------------------------------------------------- */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout, authReset } from '../../features';

import { useToggle } from '@mantine/hooks';
import {
    createStyles,
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Divider,
    Modal,
    Button,
} from '@mantine/core';
import {
    IconLogout,
    IconHome2,
    IconCalendarEvent,
    IconUser,
    IconSettings,
    IconHeart,
    IconChevronDown,
} from '@tabler/icons';

import { Logo } from '../../components';

const useStyles = createStyles((theme) => ({
    Header: {
        backgroundColor: theme.colors[theme.primaryColor][6],
        borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
    },

    container: {
        height: '100%',
    },

    group: {
        height: '100%',
    },

    userName: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.xl,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
        },
    },

    userActive: {
        backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
    },
}));

export function Header({ size = 'xs' }) {
    const { classes, theme, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useToggle(false, [false, true]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [showModal, setShowModal] = useToggle(false, [false, true]);

    const onLogout = () => {
        setShowModal(false);
        dispatch(logout());
        dispatch(authReset());
        navigate('/');
    };

    if (!user) {
        return <></>;
    }

    return (
        <>
            <header className={`Header ${classes.Header}`}>
                <Container size={size} className={classes.container}>
                    <Group position='apart' className={classes.group}>
                        <Logo variant='white' to='/' />
                        <Menu
                            withArrow
                            size='lg'
                            placement='end'
                            transition='pop-top-right'
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            control={
                                <UnstyledButton
                                    className={cx(classes.user, {
                                        [classes.userActive]: userMenuOpened,
                                    })}
                                >
                                    <Group spacing={7}>
                                        <Avatar src={user.image} alt={user.name} radius='xl' size='sm' />
                                        <Text
                                            weight={500}
                                            size='sm'
                                            sx={{ lineHeight: 1, color: theme.white }}
                                            mr={3}
                                            className={classes.userName}
                                        >
                                            {user.name}
                                        </Text>
                                        <IconChevronDown size={12} className={classes.userName} />
                                    </Group>
                                </UnstyledButton>
                            }
                        >
                            <Menu.Item component={Link} to='/' icon={<IconHome2 size={16} />}>
                                Home
                            </Menu.Item>
                            <Menu.Item component={Link} to='/dashboard' icon={<IconHeart size={16} />}>
                                dashboard
                            </Menu.Item>
                            <Menu.Item
                                component={Link}
                                to='/create-event'
                                icon={<IconCalendarEvent size={16} />}
                            >
                                New Event
                            </Menu.Item>
                            <Menu.Item component={Link} to='/settings' icon={<IconSettings size={16} />}>
                                Settings
                            </Menu.Item>
                            <Divider />
                            <Menu.Item component={Link} to='/profile' icon={<IconUser size={16} />}>
                                Profile
                            </Menu.Item>
                            <Menu.Item
                                component={Link}
                                to='/login'
                                icon={<IconLogout size={16} />}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowModal(true);
                                }}
                            >
                                Logout
                            </Menu.Item>
                        </Menu>
                    </Group>
                </Container>
            </header>

            <Modal
                opened={showModal}
                onClose={() => setShowModal(false)}
                title={
                    <>
                        <IconLogout /> Log Out?
                    </>
                }
                overflow='inside'
                centered
                size='xl'
            >
                <Text>Are you sure you want to log out of your account?</Text>
                <Group>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button onClick={onLogout}>Logout</Button>
                </Group>
            </Modal>
        </>
    );
}

export default Header;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
