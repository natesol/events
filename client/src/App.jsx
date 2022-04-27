/* ------------------------------------------------------------------------------------------------ */
/* ---- React App Component ----------------------------------------------------------------------- */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getUserPreferences, userPreferencesUpdate } from './features';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import {
    // Authentication pages
    AuthShell,
    Register,
    Login,
    ResetPassword,
    // Main app pages
    MainShell,
    Home,
    Profile,
    CreateEvent,
    Events,
    Event,
    Dashboard,
    Settings,
} from './pages';

import { CUSTOM_THEME, CUSTOM_THEME_COMPONENTS_FIXES } from './styles';

function App() {
    const dispatch = useDispatch();
    const userPreferences = useSelector((state) => state.userPreferences);

    useEffect(() => {
        dispatch(userPreferencesUpdate({ theme: getUserPreferences().theme }));
    }, []);

    return (
        <MantineProvider
            withNormalizeCSS
            theme={CUSTOM_THEME(userPreferences.theme)}
            styles={CUSTOM_THEME_COMPONENTS_FIXES}
            emotionOptions={{ key: 'e' }}
        >
            <NotificationsProvider position='top-right' autoClose={3000}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<AuthShell />}>
                            <Route path='register' element={<Register />} />
                            <Route path='login' element={<Login />} />
                            <Route path='reset-password' element={<ResetPassword />} />
                        </Route>
                        <Route path='/' element={<MainShell />}>
                            <Route index element={<Home />} />
                            <Route path='profile' element={<Profile />} />
                            <Route path='settings' element={<Settings />} />
                            <Route path='create-event' element={<CreateEvent />} />
                            <Route path='events' element={<Events />} />
                            <Route path='events/:id' element={<Event />} />
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path='*' element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </NotificationsProvider>
        </MantineProvider>
    );
}

export default App;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
