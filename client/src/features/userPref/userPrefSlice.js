/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice - Pref Preferences ------------------------------------------------------------ */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userPrefService from './userPrefService';

const initialState = {
    user: userPrefService.getPref(),
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Register a new user.
export const createPref = createAsyncThunk('pref/register', async (user, thunkAPI) => {
    try {
        return await userPrefService.createPref(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Login user.
export const loginPref = createAsyncThunk('pref/login', async (user, thunkAPI) => {
    try {
        return await userPrefService.loginPref(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Logout user.
export const logoutPref = createAsyncThunk('pref/logout', async () => {
    await userPrefService.logoutPref();
});

// Update user.
export const updatePref = createAsyncThunk('pref/update', async (newData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().pref.user;
        return await userPrefService.updatePref(newData, user._id, user.token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete user.
export const deletePref = createAsyncThunk('pref/delete', async (newData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().pref.user;
        return await userPrefService.deletePref(newData, user._id, user.token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Pref preferences slice.
export const userPrefSlice = createSlice({
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

export const { resetPrefPrefState: reset } = userPrefSlice.actions;
export const userPrefReducer = userPrefSlice.reducer;
export default userPrefReducer;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
