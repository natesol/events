/* ------------------------------------------------------------------------------------------------ */
/* ---- Custom Mantine Base Styles ---------------------------------------------------------------- */

//
export const EMOTION_OPTIONS = {
    key: 'e',
};

// Mantine MantineProvider theme object.
export const CUSTOM_THEME_BASE = {
    // Base configuration
    dir: 'ltr', // 'ltr' | 'rtl'.
    datesLocale: 'en', // Default dates formatting locale used in every @mantine/dates component.
    dateFormat: 'MMMM D, YYYY', // Default date format used in DatePicker and DateRangePicker components.
    focusRing: 'auto', // display focus ring only when user navigates with keyboard.
    loader: 'oval', // 'oval' | 'bars' | 'dots'. Default loader used in Loader and LoadingOverlay components.

    // Sizings
    spacing: {
        '2xs': 'var(--size-2xs) ',
        xs: 'var(--size-xs) ',
        sm: 'var(--size-sm) ',
        md: 'var(--size-md) ',
        lg: 'var(--size-lg) ',
        xl: 'var(--size-xl) ',
        '2xl': 'var(--size-2xl) ',
        '3xl': 'var(--size-3xl) ',
        fluid: {
            sm: 'var(--size-fluid-sm)',
            md: 'var(--size-fluid-md)',
            lg: 'var(--size-fluid-lg)',
            xl: 'var(--size-fluid-xl)',
            '2xl': 'var(--size-fluid-2xl)',
        },
    },

    // Breakpoints
    breakpoints: {
        // --screen-xs:  360px;
        // --screen-sm:  576px;
        // --screen-md:  768px;
        // --screen-lg:  1024px;
        // --screen-xl:  1440px;
        // --screen-2xl: 1920px;
        xs: 360,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1440,
        '2xl': 1920,
    },

    // Typography
    fontFamily: 'var(--ff-body)', // Main font-family used in most components.
    fontFamilyMonospace: 'var(--ff-code)', // Monospace font-family, used in Code, Kbd and Prism components.
    lineHeight: 1.5, // Base line-height used in most components.
    headings: {
        fontFamily: 'var(--ff-title)',
        fontWeight: 'var(--fw-black)',
        sizes: {
            h1: { fontSize: 'var(--fs-3xl)', lineHeight: 1.5 },
            h2: { fontSize: 'var(--fs-2xl)', lineHeight: 1.5 },
            h3: { fontSize: 'var(--fs-xl)', lineHeight: 1.4 },
            h4: { fontSize: 'var(--fs-lg)', lineHeight: 1.4 },
            h5: { fontSize: 'var(--fs-md)', lineHeight: 1.3 },
            h6: { fontSize: 'var(--fs-sm)', lineHeight: 1.3 },
        },
    },
    fontSizes: {
        xs: 'var(--fs-xs)',
        sm: 'var(--fs-sm)',
        md: 'var(--fs-md)',
        lg: 'var(--fs-lg)',
        xl: 'var(--fs-xl)',
        '2xl': 'var(--fs-2xl)',
        '3xl': 'var(--fs-3xl)',
        '4xl': 'var(--fs-4xl)',
        fluid: {
            sm: 'var(--fs-fluid-sm)',
            md: 'var(--fs-fluid-md)',
            lg: 'var(--fs-fluid-lg)',
            xl: 'var(--fs-fluid-xl)',
            '2xl': 'var(--fs-fluid-2xl)',
        },
    },

    // Border Radius
    radius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        ellipse: 'var(--radius-ellipse)',
        round: 'var(--radius-round)',
    },
    defaultRadius: 'md', // must be a key of theme.radius, or a number.

    // Animation
    transitionTimingFunction: 'var(--a-fn-default)', // Timing function used for animations.

    // Colors
    colorScheme: 'light', // 'dark' | 'light'.
    white: 'var(--white)', // style base white.
    black: 'var(--black)', // style base black.
    // Note: each color must be an array of 10 colors (shades) as string.
    colors: {
        primary: [
            'var(--primary-0)',
            'var(--primary-1)',
            'var(--primary-2)',
            'var(--primary-3)',
            'var(--primary-4)',
            'var(--primary-5)',
            'var(--primary-6)',
            'var(--primary-7)',
            'var(--primary-8)',
            'var(--primary-9)',
        ],
        accent: [
            'var(--accent-0)',
            'var(--accent-1)',
            'var(--accent-2)',
            'var(--accent-3)',
            'var(--accent-4)',
            'var(--accent-5)',
            'var(--accent-6)',
            'var(--accent-7)',
            'var(--accent-8)',
            'var(--accent-9)',
        ],
        secondary: [
            'var(--secondary-0)',
            'var(--secondary-1)',
            'var(--secondary-2)',
            'var(--secondary-3)',
            'var(--secondary-4)',
            'var(--secondary-5)',
            'var(--secondary-6)',
            'var(--secondary-7)',
            'var(--secondary-8)',
            'var(--secondary-9)',
        ],
        dark: [
            'var(--dark-base-0)',
            'var(--dark-base-1)',
            'var(--dark-base-2)',
            'var(--dark-base-3)',
            'var(--dark-base-4)',
            'var(--dark-base-5)',
            'var(--dark-base-6)',
            'var(--dark-base-7)',
            'var(--dark-base-8)',
            'var(--dark-base-9)',
        ],
        gray: [
            'var(--gray-0)',
            'var(--gray-1)',
            'var(--gray-2)',
            'var(--gray-3)',
            'var(--gray-4)',
            'var(--gray-5)',
            'var(--gray-6)',
            'var(--gray-7)',
            'var(--gray-8)',
            'var(--gray-9)',
        ],
        red: [
            '#fff5f5',
            '#ffe3e3',
            '#ffc9c9',
            '#ffa8a8',
            '#ff8787',
            '#ff6b6b',
            '#fa5252',
            '#f03e3e',
            '#e03131',
            '#c92a2a',
        ],
        pink: [
            '#fff0f6',
            '#ffdeeb',
            '#fcc2d7',
            '#faa2c1',
            '#f783ac',
            '#f06595',
            '#e64980',
            '#d6336c',
            '#c2255c',
            '#a61e4d',
        ],
        grape: [
            '#f8f0fc',
            '#f3d9fa',
            '#eebefa',
            '#e599f7',
            '#da77f2',
            '#cc5de8',
            '#be4bdb',
            '#ae3ec9',
            '#9c36b5',
            '#862e9c',
        ],
        violet: [
            '#f3f0ff',
            '#e5dbff',
            '#d0bfff',
            '#b197fc',
            '#9775fa',
            '#845ef7',
            '#7950f2',
            '#7048e8',
            '#6741d9',
            '#5f3dc4',
        ],
        indigo: [
            '#edf2ff',
            '#dbe4ff',
            '#bac8ff',
            '#91a7ff',
            '#748ffc',
            '#5c7cfa',
            '#4c6ef5',
            '#4263eb',
            '#3b5bdb',
            '#364fc7',
        ],
        blue: [
            '#e7f5ff',
            '#d0ebff',
            '#a5d8ff',
            '#74c0fc',
            '#4dabf7',
            '#339af0',
            '#228be6',
            '#1c7ed6',
            '#1971c2',
            '#1864ab',
        ],
        cyan: [
            '#e3fafc',
            '#c5f6fa',
            '#99e9f2',
            '#66d9e8',
            '#3bc9db',
            '#22b8cf',
            '#15aabf',
            '#1098ad',
            '#0c8599',
            '#0b7285',
        ],
        teal: [
            '#e6fcf5',
            '#c3fae8',
            '#96f2d7',
            '#63e6be',
            '#38d9a9',
            '#20c997',
            '#12b886',
            '#0ca678',
            '#099268',
            '#087f5b',
        ],
        green: [
            '#ebfbee',
            '#d3f9d8',
            '#b2f2bb',
            '#8ce99a',
            '#69db7c',
            '#51cf66',
            '#40c057',
            '#37b24d',
            '#2f9e44',
            '#2b8a3e',
        ],
        lime: [
            '#f4fce3',
            '#e9fac8',
            '#d8f5a2',
            '#c0eb75',
            '#a9e34b',
            '#94d82d',
            '#82c91e',
            '#74b816',
            '#66a80f',
            '#5c940d',
        ],
        yellow: [
            '#fff9db',
            '#fff3bf',
            '#ffec99',
            '#ffe066',
            '#ffd43b',
            '#fcc419',
            '#fab005',
            '#f59f00',
            '#f08c00',
            '#e67700',
        ],
        orange: [
            '#fff4e6',
            '#ffe8cc',
            '#ffd8a8',
            '#ffc078',
            '#ffa94d',
            '#ff922b',
            '#fd7e14',
            '#f76707',
            '#e8590c',
            '#d9480f',
        ],
    },
    primaryColor: 'ocean-blue', // must be a key of theme.colors, cannot be actual color value.
    primaryShade: {
        light: 6,
        dark: 8,
    },

    // Shadows
    shadows: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
    },

    // Optional custom styles
    other: {
        glows: {
            xs: 'var(--glow-1)',
            sm: 'var(--glow-2)',
            md: 'var(--glow-3)',
            lg: 'var(--glow-4)',
            xl: 'var(--glow-5)',
        },
        colors: {
            danger: 'var(--danger)',
            success: 'var(--success)',
            warning: 'var(--warning)',
            info: 'var(--info)',
        },
    },
};

// Add custom styles to the theme
export const CUSTOM_THEME_DEFAULTS = {
    Avatar: {
        placeholder: {
            backgroundColor: 'var(--gray-1)',
            color: 'red',
        },
    },

    // Button: { color: 'blue' },
    // Badge: { size: 'xl', radius: 0 },
};

// Mantine components style fixes.
export const CUSTOM_THEME_STYLES = {
    Avatar: (theme, params) => ({
        placeholder: {
            backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.dark[5],
        },
    }),

    Button: (theme, params) => ({
        // Shared button styles are applied to all buttons
        root: {
            height: 42,
            padding: '0 30px',
        },

        filled: {
            // subscribe to component params
            // color: theme.colors[params.color || theme.primaryColor][1],
        },

        // These styles are applied only to buttons with outline variant
        outline: {
            // You can use any selectors inside (the same way as in createStyles function)
            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
        },
    }),

    Anchor: (theme, params) => ({
        root: {
            fontSize: 'inherit',
            borderRadius: theme.radius[theme.defaultRadius],
        },
    }),

    Switch: (theme, params) => ({
        input: {
            '&:checked::after': {
                transform: 'translateX(-120%)',
            },
        },
    }),

    TextInput: (theme, params) => ({
        error: {
            fontSize: theme.fontSizes.sm,
        },
    }),

    PasswordInput: (theme, params) => ({
        description: {
            fontSize: theme.fontSizes.xs,
        },
        error: {
            fontSize: theme.fontSizes.sm,
        },
    }),

    Notification: (theme, params) => ({
        root: {
            '&::before': {
                top: theme.spacing['2xs'],
                bottom: theme.spacing['2xs'],
            },
        },
    }),

    Tooltip: (theme, params) => ({
        body: {
            padding: theme.spacing.xs,
        },
    }),

    Menu: (theme, params) => ({
        body: {
            padding: theme.spacing.md,
        },
        item: {
            padding: `${theme.spacing.xs} ${theme.spacing.xs}`,

            '&:focus': {
                outlineOffset: '2px',
                outline: `2px solid ${
                    theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
                }`,
            },
            '&:focus:not(:focus-visible)': {
                outline: 'none',
            },
        },
    }),

    Checkbox: (theme, params) => ({
        label: {
            paddingLeft: theme.spacing.xs,
        },
    }),
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
