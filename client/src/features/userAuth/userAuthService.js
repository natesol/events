/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice Services - User Authentication ------------------------------------------------ */

import axios from 'axios';

import { KEYS_PREFIX } from '../../utilities/constants';

const USER_AUTHENTICATION_API_URL = '/api/users/';
const USER_AUTHENTICATION_KEY = KEYS_PREFIX + 'user-data';

// Get the current user data.
export const getUser = () => JSON.parse(localStorage.getItem(USER_AUTHENTICATION_KEY));

// Register a new user.
export const createUser = async (userData) => {
    const response = await axios.post(USER_AUTHENTICATION_API_URL, userData);

    if (response.data) {
        localStorage.setItem(USER_AUTHENTICATION_KEY, JSON.stringify(response.data));
    }

    return response.data;
};

// Login user.
export const loginUser = async (userData) => {
    const response = await axios.post(USER_AUTHENTICATION_API_URL + 'login', userData);

    if (response.data) {
        localStorage.setItem(USER_AUTHENTICATION_KEY, JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user.
export const logoutUser = async () => {
    localStorage.removeItem(USER_AUTHENTICATION_KEY);
};

// Update user.
export const updateUser = async (newData, userId, token) => {
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
export const deleteUser = async (userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(USER_AUTHENTICATION_API_URL + userId, config);

    return response.data;
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
