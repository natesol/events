/* ------------------------------------------------------------------------------------------------ */
/* ---- React App Component ----------------------------------------------------------------------- */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { validateUserToken } from './features';

import { EMOTION_OPTIONS, CUSTOM_THEME_BASE, CUSTOM_THEME_DEFAULTS, CUSTOM_THEME_STYLES } from './utilities';

import { AuthTemplate, MainTemplate } from './components';
import {
    // Authentication pages
    Register,
    Login,
    ResetPassword,

    // Main app pages
    Home,
    Profile,
    Settings,
    Connections,
    Notifications,
    // Events
    Events,
    SingleEvent,
    CreateEvent,
    EventsArchive,
} from './pages';

const App = () => {
    const [colorScheme, setColorScheme] = useState('light');
    const toggleColorScheme = (value) => {
        document.documentElement.setAttribute('data-theme', colorScheme);
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        validateUserToken();
    });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', colorScheme);
    }, [colorScheme]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                emotionOptions={EMOTION_OPTIONS}
                theme={{
                    ...CUSTOM_THEME_BASE,
                    ...{
                        colorScheme,
                        primaryColor: colorScheme === 'light' ? 'primary' : 'blue',
                    },
                }}
                styles={CUSTOM_THEME_STYLES}
                defaultProps={CUSTOM_THEME_DEFAULTS}
            >
                <NotificationsProvider position='top-right' autoClose={3000}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<AuthTemplate />}>
                                <Route path='register' element={<Register />} />
                                <Route path='login' element={<Login />} />
                                <Route path='reset-password' element={<ResetPassword />} />
                            </Route>
                            <Route path='/' element={<MainTemplate />}>
                                <Route index element={<Home />} />
                                <Route path='profile' element={<Profile />} />
                                <Route path='settings' element={<Settings />} />
                                <Route path='connections' element={<Connections />} />
                                <Route path='notifications' element={<Notifications />} />
                            </Route>
                            <Route path='/events' element={<MainTemplate />}>
                                <Route index element={<Events />} />
                                <Route path='create' element={<CreateEvent />} />
                                <Route path='archive' element={<EventsArchive />} />
                                <Route path=':id' element={<SingleEvent />} />
                                <Route path='*' element={<Events />} />
                            </Route>
                            {/* <Route path='/*' element={<MainTemplate />} /> */}
                        </Routes>
                    </BrowserRouter>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
