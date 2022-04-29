/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Body (Pages Base Layout) ------------------------------------------------ */

import { useState } from 'react';
import { Container, ScrollArea } from '@mantine/core';

export const Body = ({ children, pageName, withHeader, size = 'md', styles, ...props }) => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastY, lastYPosition] = useState(0);

    const onScrollPositionChange = (y) => {
        if (!withHeader) return;

        if (50 < y && lastY.y < y) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        lastYPosition({ y });
    };

    return (
        <ScrollArea
            type='hover'
            scrollbarSize={10}
            scrollHideDelay={1500}
            onScrollPositionChange={({ y }) => onScrollPositionChange(y)}
            styles={{
                root: {
                    height: '100vh',
                    width: '100vw',
                    ...styles,
                },
            }}
            classNames={{
                root: `Body${pageName ? ` ${pageName}` : ''}${showHeader ? ' show-Header' : ''}`,
            }}
            {...props}
        >
            <Container
                size={size}
                px='sm'
                sx={{ position: 'relative', paddingTop: withHeader ? 'var(--header-h)' : '0' }}
            >
                {children}
            </Container>
        </ScrollArea>
    );
};

export default Body;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
