import { Link } from 'react-router-dom';

import { Accordion } from '@mantine/core';

export const UpcomingEvents = () => {
    const events = [1, 2, 3, 4, 5, 6];
    // const events = [];

    return (
        <>
            <h3>My Events</h3>
            <Accordion iconPosition='right' offsetIcon={false} multiple>
                {events.length === 0 ? (
                    <p>You haven't joined any events yet.</p>
                ) : (
                    events.map((event, i) => (
                        <Accordion.Item label={`Accordion Item #${i}`} key={i}>
                            <Link to={`/event/${event}`}>go to event</Link>
                            {event}
                        </Accordion.Item>
                    ))
                )}
            </Accordion>
        </>
    );
};

export default UpcomingEvents;
