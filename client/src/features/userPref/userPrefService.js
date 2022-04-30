/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice Services - Pref Preferences --------------------------------------------------- */

import axios from 'axios';

import { KEYS_PREFIX } from '../../utilities/constants';

const USER_AUTHENTICATION_API_URL = '/api/users/';
const USER_AUTHENTICATION_KEY = KEYS_PREFIX + 'user-data';

// Get the current user data.
export const getPref = () => JSON.parse(localStorage.getItem(USER_AUTHENTICATION_KEY));

// Register a new user.
export const createPref = async (userData) => {
    const response = await axios.post(USER_AUTHENTICATION_API_URL, userData);

    if (response.data) {
        localStorage.setItem(USER_AUTHENTICATION_KEY, JSON.stringify(response.data));
    }

    return response.data;
};

// Update user.
export const updatePref = async (newData, userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(USER_AUTHENTICATION_API_URL + userId, newData, config);

    return response.data;
};

// Delete user.
// TODO: Add delete user.
export const deletePref = async (userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(USER_AUTHENTICATION_API_URL + userId, config);

    return response.data;
};

const userPrefService = {
    getPref,
    createPref,
    updatePref,
    deletePref,
};
export default userPrefService;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
