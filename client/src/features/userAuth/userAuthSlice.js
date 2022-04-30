/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice - User Authentication --------------------------------------------------------- */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userAuthService from './userAuthService';

const user = userAuthService.getUser();
const initialState = {
    user: user,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Register a new user.
export const createUser = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await userAuthService.createUser(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Login user.
export const loginUser = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await userAuthService.loginUser(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Logout user.
export const logoutUser = createAsyncThunk('auth/logout', async () => {
    await userAuthService.logoutUser();
});

// Update user.
export const updateUser = createAsyncThunk('auth/update', async (newData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().auth.user;
        return await userAuthService.updateUser(newData, user._id, user.token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete user.
// TODO: Add delete user.
export const deleteUser = createAsyncThunk('auth/delete', async (newData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().auth.user;
        return await userAuthService.deleteUser(newData, user._id, user.token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// User authentication slice.
export const userAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

const { reset } = userAuthSlice.actions;
export { reset as resetUserAuthState };
export const userAuthReducer = userAuthSlice.reducer;
export default userAuthReducer;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
