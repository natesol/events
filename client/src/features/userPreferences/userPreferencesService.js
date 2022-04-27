/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice Services - User Preferences --------------------------------------------------- */

import { initialState } from './userPreferencesSlice';

//
export const USER_PREFERENCES_KEY = 'user-preferences';

// Create new user preferences object.
export const create = (initialState) => {
    localStorage.setItem(USER_PREFERENCES_KEY, JSON.stringify(initialState));
    document.documentElement.setAttribute('data-theme', initialState.theme);

    return initialState;
};

// Get user preferences.
export const get = () => {
    const data = localStorage.getItem(USER_PREFERENCES_KEY);

    if (data) {
        return JSON.parse(data);
    }
    return create(initialState);
};

// Update user preferences.
export const update = (newPreferences) => {
    const userPreferences = {
        ...get(),
        ...newPreferences,
    };

    localStorage.setItem(USER_PREFERENCES_KEY, JSON.stringify(userPreferences));
    document.documentElement.setAttribute('data-theme', userPreferences.theme);

    return userPreferences;
};

// Delete user preferences object.
export const reset = () => {
    localStorage.removeItem(USER_PREFERENCES_KEY);
    document.documentElement.removeAttribute('data-theme');
};

const userPreferencesService = {
    create,
    get,
    update,
    reset,
};

export default userPreferencesService;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
