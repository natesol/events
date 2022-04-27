/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice Services - User Authentication ------------------------------------------------ */

import axios from 'axios';

const API_URL = '/api/users/';
export const USER_AUTHENTICATION_KEY = 'user-data';

// Register new user.
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem(USER_AUTHENTICATION_KEY, JSON.stringify(response.data));
    }

    return response.data;
};

// Login user.
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
        localStorage.setItem(USER_AUTHENTICATION_KEY, JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user.
const logout = () => {
    localStorage.removeItem(USER_AUTHENTICATION_KEY);
};

// TODO: Add delete user.
const remove = () => {};

const authService = {
    register,
    logout,
    login,
    remove,
};

export default authService;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
