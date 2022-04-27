import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from '@mantine/core';

import { Loader, Body, KebabMenu, Section, Logo } from '../../components';

export function AuthShell() {
    const { isLoading } = useSelector((state) => state.auth);

    return (
        <>
            <Loader fullPage visible={isLoading} />
            <Body size='sm'>
                <Container style={{ position: 'absolute', top: '1rem', right: '0' }}>
                    <KebabMenu />
                </Container>
                <Container
                    className='Main'
                    component='main'
                    style={{
                        maxWidth: 'unset',
                        paddingInline: '0',
                    }}
                >
                    <Section className='logo-section'>
                        <Logo style={{ fontSize: '5rem' }} />
                    </Section>
                    <Outlet />
                </Container>
            </Body>
        </>
    );
}

export default AuthShell;
