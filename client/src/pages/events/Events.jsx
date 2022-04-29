import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export function Events() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const params = useParams();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, dispatch]);

    return (
        <>
            <section className='heading'>
                <h1>My Events</h1>
            </section>
        </>
    );
}

export default Events;
