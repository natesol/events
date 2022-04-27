/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice - User Preferences ------------------------------------------------------------ */

import { createSlice } from '@reduxjs/toolkit';
import userPreferencesService, { USER_PREFERENCES_KEY } from './userPreferencesService';

const userPreferences = localStorage.getItem(USER_PREFERENCES_KEY);

export const initialState = {
    theme: userPreferences.theme || 'dark', // 'dark', 'light'
    isLoading: false,
};

// Create new user preferences object.
export const createUserPreferences = () => {
    return userPreferencesService.createUserPreferences(initialState);
};

// Get user preferences.
export const getUserPreferences = () => {
    return userPreferencesService.get();
};

// Update user preferences.
export const updateUserPreferences = (newPreferences) => {
    return userPreferencesService.update(newPreferences);
};

// Reset user preferences.
export const resetUserPreferences = () => {
    return userPreferencesService.reset();
};

export const userPreferencesSlice = createSlice({
    name: 'userPreferences',
    initialState,
    reducers: {
        reset: (state) => {
            state = initialState;
        },
        update: (state, action) => {
            const newState = Object.assign(state, action.payload);
            state = newState;
            updateUserPreferences(state);
        },
    },
});

const { reset, update } = userPreferencesSlice.actions;

const userPreferencesReducer = userPreferencesSlice.reducer;

export { userPreferencesReducer, reset as userPreferencesReset, update as userPreferencesUpdate };

export default userPreferencesReducer;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
