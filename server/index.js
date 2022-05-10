/* ------------------------------------------------------------------------------------------------ */
/* ---- Backend Entry File - Express Server ------------------------------------------------------- */

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');
const { connectToDB } = require('./config/db');
const PORT = process.env.PORT || 5000;

// Starting the server.
connectToDB();
const app = express();

// Base middleware.
app.use('/uploads', express.static('/uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes.
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));

// Serve frontend.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set environment to production.'));
}

// Errors fallback middleware.
app.use(errorHandler);

// Running the server.
app.listen(PORT, () => console.log(`[server] api server started on port: ${PORT}`.magenta));

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
