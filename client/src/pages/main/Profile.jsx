import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export function Profile() {
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
            <section className='heading'>
                <h1>Profile</h1>
            </section>
        </>
    );
}

export default Profile;
