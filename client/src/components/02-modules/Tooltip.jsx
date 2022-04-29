import { Tooltip as MantineTooltip } from '@mantine/core';

export const Tooltip = ({ children, tip = 'Add a tip property', ...props }) => {
    return (
        <MantineTooltip
            label={tip}
            gutter={10}
            withArrow
            arrowSize={2.5}
            transition='fade'
            transitionDuration={80}
            transitionTimingFunction='cubic-bezier(0.65, 0.05, 0.36, 1)'
            openDelay={100}
            closeDelay={400}
            {...props}
        >
            {children}
        </MantineTooltip>
    );
};

export default Tooltip;
