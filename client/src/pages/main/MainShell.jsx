import { Outlet } from 'react-router-dom';

import { Container } from '@mantine/core';

import { Body, Header } from '../../components';

export function MainShell() {
    const appSize = 'sm';

    return (
        <Body withHeader size={appSize}>
            <Header size={appSize} />
            <Container
                size={appSize}
                className='Main'
                component='main'
                style={{
                    maxWidth: 'unset',
                    paddingInline: '0',
                }}
            >
                <Outlet />
            </Container>
        </Body>
    );
}

export default MainShell;
