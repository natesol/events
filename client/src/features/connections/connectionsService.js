/* ------------------------------------------------------------------------------------------------ */
/* ---- Redux Slice Services - User Connections -------------------------------------------------------- */

import axios from 'axios';

const API_URL = '/api/connections/';

// Create new connection
const createConnection = async (connectionData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, connectionData, config);

    return response.data;
};

// Get user connections
const getConnections = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
};

// Update user connection
const updateConnection = async (connectionId, connectionData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(API_URL + connectionId, { text: connectionData }, config);

    return response.data;
};

// Delete user connection
const deleteConnection = async (connectionId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(API_URL + connectionId, config);

    return response.data;
};

const connectionService = {
    createConnection,
    getConnections,
    deleteConnection,
    updateConnection,
};

export default connectionService;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
