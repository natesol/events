import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Menu, Divider, ActionIcon, Switch } from '@mantine/core';

import {
    IconDotsVertical,
    IconLogin,
    IconPencil,
    IconCloudLockOpen,
    IconSettings,
    IconSun,
    IconMoonStars,
} from '@tabler/icons';

import { ThemeChangeButton } from '../';

export function KebabMenu() {
    return (
        <Menu
            withArrow
            size='lg'
            placement='end'
            transition='pop-top-right'
            control={
                <ActionIcon tabIndex={0} className='menu-button' size={'lg'}>
                    <IconDotsVertical />
                </ActionIcon>
            }
        >
            <Menu.Item component={NavLink} to='/login' icon={<IconLogin size={16} />}>
                Login
            </Menu.Item>
            <Menu.Item component={NavLink} to='/register' icon={<IconPencil size={16} />}>
                Register
            </Menu.Item>
            <Menu.Item component={NavLink} to='/reset-password' icon={<IconCloudLockOpen size={16} />}>
                Reset password
            </Menu.Item>
            <Divider />
            <ThemeChangeButton>
                {(theme) => (
                    <Menu.Item
                        icon={theme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
                        rightSection={
                            <Switch
                                checked={theme === 'dark' ? true : false}
                                onChange={(e) => e.preventDefault()}
                            />
                        }
                    >
                        Change to {theme === 'dark' ? 'light' : 'dark'}
                    </Menu.Item>
                )}
            </ThemeChangeButton>
            <Menu.Item component={NavLink} to='/settings' icon={<IconSettings size={16} />}>
                Settings
            </Menu.Item>
        </Menu>
    );
}

export default KebabMenu;
