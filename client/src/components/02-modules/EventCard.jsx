import { useState, useContext } from 'react';

import { Paper } from '@mantine/core';

export const EventCard = ({ num }) => {
    return (
        <Paper>
            <h1>Event card #{num}</h1>
        </Paper>
    );
};

export default EventCard;
