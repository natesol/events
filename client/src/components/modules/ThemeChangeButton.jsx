import { useSelector, useDispatch } from 'react-redux';
import { userPreferencesUpdate } from '../../features';

export function ThemeChangeButton({ children }) {
    const dispatch = useDispatch();
    const userPreferences = useSelector((state) => state.userPreferences);

    const changeTheme = () => {
        dispatch(userPreferencesUpdate({ theme: userPreferences.theme === 'dark' ? 'light' : 'dark' }));
    };

    return <span onClick={changeTheme}>{children(userPreferences.theme)}</span>;
}

export default ThemeChangeButton;
