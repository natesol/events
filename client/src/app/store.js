/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Store Configuration - App State Management ------------------------------------------ */

import { configureStore } from '@reduxjs/toolkit';

import { userAuthReducer, userPrefReducer, eventsReducer } from '../features';

export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        userPref: userPrefReducer,
        events: eventsReducer,
    },
});

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
