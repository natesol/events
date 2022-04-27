import { Link } from 'react-router-dom';

import { Anchor } from '@mantine/core';

export function Logo({ children, to, align = false, variant, style, ...props }) {
    const _style = {
        marginInline: align === 'center' ? 'auto' : '',
        ...style,
    };

    const _logo = (
        <h1 className={`Logo ${variant ? variant + ' variant' : ''}`} style={_style}>
            {children ? children : 'EVENTS'}
        </h1>
    );

    return (
        <>
            {to ? (
                <Anchor component={Link} to={to} variant='text' {...props}>
                    {_logo}
                </Anchor>
            ) : (
                <span {...props}>{_logo}</span>
            )}
        </>
    );
}

export default Logo;
