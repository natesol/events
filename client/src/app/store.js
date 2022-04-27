import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userPreferencesReducer, goalReducer } from '../features';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userPreferences: userPreferencesReducer,
        goals: goalReducer,
    },
});
