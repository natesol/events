/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice - User Preferences ------------------------------------------------------------ */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userPrefService, { getUser } from './userPrefService';

const initialState = {
    user: getUser(),
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Register a new user.
export const createUser = createAsyncThunk('pref/register', async (user, thunkAPI) => {
    try {
        return await userPrefService.createUser(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Login user.
export const loginUser = createAsyncThunk('pref/login', async (user, thunkAPI) => {
    try {
        return await userPrefService.loginUser(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Logout user.
export const logoutUser = createAsyncThunk('pref/logout', async () => {
    await userPrefService.logoutUser();
});

// Update user.
export const updateUser = createAsyncThunk('pref/update', async (newData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().pref.user;
        return await userPrefService.updateUser(newData, user._id, user.token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete user.
export const deleteUser = createAsyncThunk('pref/delete', async (newData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().pref.user;
        return await userPrefService.deleteUser(newData, user._id, user.token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// User preferences slice.
export const prefSlice = createSlice({
    name: 'pref',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
});

export const { resetUserPrefState: reset } = prefSlice.actions;
export const prefReducer = prefSlice.reducer;
export default prefReducer;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
