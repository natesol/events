import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Header, CardSlider, ToDoGroup } from '../../components';

export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, dispatch]);

    return (
        <>
            <section>
                <h4 className='fs-6 text-muted mb-0'>welcome back,</h4>
                <h3 className='fs-1 text-capitalize fw-bold'>{user?.name}</h3>
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
                    <Link to='/events'>View all</Link>
                </div>
                <CardSlider />
            </section>

            <br />
            <hr />
            <br />

            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 className='fs-4 fw-bold'>Ongoing Tasks</h4>
                    <Link to='/tasks'>View all</Link>
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
}

export default Home;
