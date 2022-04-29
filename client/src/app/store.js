/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Store Configuration - App State Management ------------------------------------------ */

import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // userPref: userPrefReducer,
        // events: eventsReducer,
        goals: goalReducer,
    },
});

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
