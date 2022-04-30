/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Authentication Pages Template ------------------------------------------- */

import { useEffect, useState } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    useMantineTheme,
    useMantineColorScheme,
    Menu,
    Divider,
    ActionIcon,
    Switch,
    Box,
} from '@mantine/core';

import { DotsVertical, Login, Pencil, CloudLockOpen, Settings, Sun, MoonStars } from 'tabler-icons-react';

import { Loader, Body, Section, Logo } from '../';

export const AuthTemplate = () => {
    const { user, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    const root = document.getElementById('root');
    const handleRootClick = (e) => {
        if (e.target.id !== 'auth-menu') {
            setOpened(false);
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
        root.addEventListener('click', handleRootClick);
        return () => {
            root.removeEventListener('click', handleRootClick);
        };
    });

    if (user) return <></>;

    return (
        <>
            <Loader fullPage visible={isLoading} />
            <Body size='sm'>
                <Box px='sm' sx={{ position: 'absolute', top: '1rem', right: '0' }}>
                    <Menu
                        withArrow
                        closeOnScroll
                        opened={opened}
                        menuId='auth-menu'
                        size='lg'
                        placement='end'
                        transition='pop-top-right'
                        control={
                            <ActionIcon
                                tabIndex={0}
                                className='menu-button'
                                size={'lg'}
                                onClick={() => setOpened(!opened)}
                            >
                                <DotsVertical />
                            </ActionIcon>
                        }
                    >
                        <Menu.Item
                            component={NavLink}
                            to='/login'
                            icon={<Login size={16} />}
                            onClick={() => setOpened(false)}
                        >
                            Login
                        </Menu.Item>
                        <Menu.Item
                            component={NavLink}
                            to='/register'
                            icon={<Pencil size={16} />}
                            onClick={() => setOpened(false)}
                        >
                            Register
                        </Menu.Item>
                        <Menu.Item
                            component={NavLink}
                            to='/reset-password'
                            icon={<CloudLockOpen size={16} />}
                            onClick={() => setOpened(false)}
                        >
                            Reset password
                        </Menu.Item>
                        <Divider />
                        <Menu.Item
                            onClick={() => toggleColorScheme()}
                            icon={colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                            rightSection={<Switch checked={colorScheme === 'dark' ? true : false} readOnly />}
                        >
                            Change to {colorScheme === 'dark' ? 'light' : 'dark'}
                        </Menu.Item>
                        <Menu.Item
                            component={NavLink}
                            to='/settings'
                            icon={<Settings size={16} />}
                            onClick={() => setOpened(false)}
                        >
                            Settings
                        </Menu.Item>
                    </Menu>
                </Box>
                <Box className='Main' component='main'>
                    <Section className='logo-section'>
                        <Logo style={{ fontSize: '5rem' }} />
                    </Section>
                    <Outlet />
                </Box>
            </Body>
        </>
    );
};

export default AuthTemplate;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
