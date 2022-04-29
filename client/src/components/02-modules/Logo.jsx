import { Link } from 'react-router-dom';

import { createStyles, Anchor } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
    logo: {
        backgroundImage: theme.fn.linearGradient(
            135,
            theme.colors[theme.primaryColor][2],
            theme.colors[theme.primaryColor][6],
            theme.colors[theme.primaryColor][9]
        ),
    },
}));

export const Logo = ({ children, to, align, variant, style, ...props }) => {
    const { classes } = useStyles();

    const logoComponent = (
        <h1
            className={`Logo${variant ? ` variant ${variant}` : ` ${classes.logo}`}`}
            style={{
                marginInline: align === 'center' ? 'auto' : '',
                ...style,
            }}
        >
            {children ? children : 'EVENTS'}
        </h1>
    );

    return (
        <>
            {to ? (
                <Anchor component={Link} to={to} variant='text' {...props}>
                    {logoComponent}
                </Anchor>
            ) : (
                <span {...props}>{logoComponent}</span>
            )}
        </>
    );
};

export default Logo;
