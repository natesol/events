/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - App Header Layout ------------------------------------------------------- */

import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout, authReset } from '../../features';

import { useToggle } from '@mantine/hooks';
import {
    ActionIcon,
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
    Logout,
    Bell,
    Users,
    Home2,
    CalendarPlus,
    User,
    Settings,
    Search,
    CalendarStats,
} from 'tabler-icons-react';

import { Logo } from '../../components';

const useStyles = createStyles((theme) => ({
    Header: {
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
        borderBottom: `1px solid ${
            theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[5]
        }`,
    },

    userName: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },
}));

export const Header = ({ size = 'xs' }) => {
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
                <Container component={Group} size={size} sx={{ height: '100%' }} position='apart'>
                    <Logo to='/' />
                    <Group spacing='2xs'>
                        <ActionIcon
                            size='xl'
                            radius='round'
                            sx={{
                                backgroundColor:
                                    theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
                            }}
                        >
                            <Search />
                        </ActionIcon>
                        <Menu
                            withArrow
                            size='lg'
                            placement='end'
                            transition='pop-top-right'
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            control={
                                <ActionIcon
                                    sx={{
                                        root: {
                                            padding: `${theme.spacing.md}`,
                                        },
                                    }}
                                    size='xl'
                                    radius='round'
                                >
                                    <Avatar src={user.image} alt={user.name} radius='xl' size='md' />
                                </ActionIcon>
                            }
                        >
                            <Menu.Item component={NavLink} to='/notifications' icon={<Bell size={16} />}>
                                Notifications
                            </Menu.Item>
                            <Menu.Item component={NavLink} to='/friends' icon={<Users size={16} />}>
                                Friends
                            </Menu.Item>
                            <Divider />

                            <Menu.Item component={NavLink} to='/' icon={<Home2 size={16} />}>
                                Home
                            </Menu.Item>
                            <Menu.Item
                                component={NavLink}
                                to='/events/create'
                                icon={<CalendarPlus size={16} />}
                            >
                                New Event
                            </Menu.Item>
                            <Menu.Item
                                component={NavLink}
                                to='/events/archive'
                                icon={<CalendarStats size={16} />}
                            >
                                Events Archive
                            </Menu.Item>
                            <Menu.Item component={NavLink} to='/settings' icon={<Settings size={16} />}>
                                Settings
                            </Menu.Item>
                            <Divider />
                            <Menu.Item component={NavLink} to='/profile' icon={<User size={16} />}>
                                Profile
                            </Menu.Item>
                            <Menu.Item
                                component={NavLink}
                                to='/login'
                                icon={<Logout size={16} />}
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
                        <Logout /> Log Out?
                    </>
                }
                overflow='hidden'
                centered
                size='sm'
                styles={{
                    inner: {
                        padding: '1rem',
                    },
                }}
            >
                <Text mb='md'>Are you sure you want to log out of your account?</Text>
                <Group position='right'>
                    <Button onClick={() => setShowModal(false)} variant='default'>
                        Cancel
                    </Button>
                    <Button onClick={onLogout}>Logout</Button>
                </Group>
            </Modal>
        </>
    );
};

export default Header;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
