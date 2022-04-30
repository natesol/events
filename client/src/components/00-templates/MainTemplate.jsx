/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Main App Pages Template ------------------------------------------------- */

import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    MediaQuery,
    ScrollArea,
    Container,
    AppShell,
    Navbar,
    Header as MantineHeader,
    Footer,
    Aside,
    Text,
    Burger,
    useMantineTheme,
    Divider,
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    createStyles,
} from '@mantine/core';

import { ChevronRight } from 'tabler-icons-react';

import { Loader, Body, Header, Logo } from '..';

const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}));

export const MainTemplate = () => {
    const { user, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const appSize = 'sm';

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, dispatch]);

    if (!user) return <></>;

    return (
        <>
            <Loader fullPage visible={isLoading} />
            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <AppShell
                    styles={{
                        main: {
                            padding: `var(--mantine-header-height, 0) var(--mantine-aside-width, 0) var(--mantine-footer-height, 0) var(--mantine-navbar-width, 0)`,
                        },
                    }}
                    navbarOffsetBreakpoint='sm'
                    asideOffsetBreakpoint='sm'
                    fixed
                    header={
                        <MantineHeader height={70} p='md' component='header'>
                            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                <Logo to='/' />
                            </div>
                        </MantineHeader>
                    }
                    navbar={
                        <Navbar p='md' hiddenBreakpoint='sm' width={{ sm: 240, lg: 340 }}>
                            <Navbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
                                scrollable content here
                            </Navbar.Section>
                            <Divider />
                            <Navbar.Section>
                                <UnstyledButton
                                    mt='xs'
                                    className={classes.user}
                                    sx={{ borderRadius: theme.radius.xs }}
                                >
                                    <Group>
                                        <Avatar src={user?.image} radius='xl' />
                                        <div style={{ flex: 1 }}>
                                            <Text size='sm' weight={500}>
                                                {user?.firstName} {user?.lastName}
                                            </Text>
                                            <Text color='dimmed' size='xs'>
                                                {user?.email}
                                            </Text>
                                        </div>
                                        <ChevronRight size={14} />
                                    </Group>
                                </UnstyledButton>
                            </Navbar.Section>
                        </Navbar>
                    }
                >
                    <ScrollArea>
                        <Container size='xl'>
                            <Outlet />
                        </Container>
                    </ScrollArea>
                </AppShell>
            </MediaQuery>

            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <Body withHeader size={appSize}>
                    <Header size={appSize} />
                    <Container
                        size={appSize}
                        className='Main'
                        component='main'
                        sx={{
                            maxWidth: 'unset',
                            padding: '2rem 0',
                        }}
                    >
                        <Outlet />
                    </Container>
                </Body>
            </MediaQuery>
        </>
    );
};

export default MainTemplate;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
