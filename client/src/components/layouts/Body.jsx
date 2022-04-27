/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Body (Base Layout) ------------------------------------------------------ */

import { useState } from 'react';
import { Container, ScrollArea } from '@mantine/core';

export function Body({ children, pageName, withHeader = false, size = 'sm', ...props }) {
    const [showHeader, setShowHeader] = useState(true);
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    const onScrollPositionChange = (e) => {
        if (!withHeader) return;

        if (50 < e.y && scrollPosition.y < e.y) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        setScrollPosition(e);
    };

    return (
        <ScrollArea
            type='hover'
            scrollbarSize={10}
            scrollHideDelay={1500}
            onScrollPositionChange={onScrollPositionChange}
            style={{
                height: '100vh',
            }}
        >
            <Container
                size={size}
                className={`body-container${pageName ? ` ${pageName}` : ''}${
                    showHeader ? ' show-Header' : ''
                }`}
                style={{
                    marginTop: withHeader ? 'var(--header-h)' : '',
                    position: 'relative',
                    paddingBlock: '3rem',
                }}
                {...props}
            >
                {children}
            </Container>
        </ScrollArea>
    );
}

export default Body;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
