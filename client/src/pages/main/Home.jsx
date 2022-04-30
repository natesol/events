import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { EventCard, ToDoGroup } from '../../components';
import { Anchor, ScrollArea, Box } from '@mantine/core';

export const Home = () => {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <EventCard key={i} num={i} />
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
