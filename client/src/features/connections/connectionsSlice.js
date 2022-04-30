/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice - User Connections ----------------------------------------------------------------- */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import connectionsService from './connectionsService';

const initialState = {
    connections: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Create new connection
export const createConnection = createAsyncThunk('connections/create', async (connectionData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await connectionsService.createConnection(connectionData, token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Get user connections
export const getConnections = createAsyncThunk('connections/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await connectionsService.getConnections(token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete user connection
export const deleteConnection = createAsyncThunk('connections/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await connectionsService.deleteConnection(id, token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Update user connection
export const updateConnection = createAsyncThunk('connections/update', async (connectionData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await connectionsService.updateConnection(connectionData._id, connectionData.text, token);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const connectionsSlice = createSlice({
    name: 'connections',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createConnection.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createConnection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.connections.push(action.payload);
            })
            .addCase(createConnection.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getConnections.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getConnections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.connections = action.payload;
            })
            .addCase(getConnections.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteConnection.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteConnection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.connections = state.connections.filter(
                    (connection) => connection._id !== action.payload.id
                );
            })
            .addCase(deleteConnection.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

const { reset } = connectionsSlice.actions;
const connectionsReducer = connectionsSlice.reducer;

export { connectionsReducer, reset as connectionsReset };
export default connectionsReducer;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
