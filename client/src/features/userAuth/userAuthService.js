/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice Services - User Authentication ------------------------------------------------ */

import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { KEYS_PREFIX } from '../../utilities/constants';

const USER_AUTHENTICATION_API_URL = '/api/users/';
const USER_AUTHENTICATION_KEY = KEYS_PREFIX + 'user-data';

//
export const validateUserToken = async () => {
    const token = getUser()?.token;

    if (token) {
        const decoded = jwtDecode(token);

        // Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            await logoutUser();
        }
    }
};

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
    console.log(userData);

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

const userAuthService = {
    validateUserToken,
    getUser,
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
};
export default userAuthService;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
