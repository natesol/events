import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { EventCard, ToDoGroup } from '../../components';
import { Anchor, ScrollArea, Box } from '@mantine/core';
import { getEvents } from '../../features';

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { events, isLoading, isError, message } = useSelector((state) => state.events);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (!user) {
            navigate('/login');
        }

        dispatch(getEvents());
    }, [user, navigate, isError, message, dispatch]);

    return (
        <>
            <section>
                <h4 className='fs-6 text-muted mb-0'>welcome back,</h4>
                <h3 className='fs-1 text-capitalize fw-bold'>{user?.firstName + ' ' + user?.lastName}</h3>
            </section>

            <br />
            <hr />
            <br />

            <section>
                <div
                    className='mb-2'
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <h4 className='mb-0 fs-4 fw-bold'>Upcoming Events</h4>
                    <Anchor component={Link} to='/events'>
                        View all
                    </Anchor>
                </div>
                <ScrollArea offsetScrollbars>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            gap: theme.spacing['2xl'],
                        })}
                    >
                        {events.map((event) => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </Box>
                </ScrollArea>
            </section>

            <br />
            <hr />
            <br />

            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 className='fs-4 fw-bold'>Ongoing Tasks</h4>
                    <Anchor component={Link} to='/tasks'>
                        View all
                    </Anchor>
                </div>
                <ToDoGroup />
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <p>asflafalfal alfalfla la</p>
        </>
    );
};

export default Home;
