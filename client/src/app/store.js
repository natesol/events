/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Store Configuration - App State Management ------------------------------------------ */

import { configureStore } from '@reduxjs/toolkit';

import { userAuthReducer, userPrefReducer, connectionsReducer, eventsReducer } from '../features';

export const store = configureStore({
    reducer: {
        // userAuth: userAuthReducer,
        auth: userAuthReducer,
        userPref: userPrefReducer,
        connections: connectionsReducer,
        events: eventsReducer,
    },
});

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
