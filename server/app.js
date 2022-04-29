const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');
const { connectToDB } = require('./config/db');
const PORT = process.env.PORT || 5000;

// Start server
connectToDB();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`[server] api server started on port: ${PORT}`.magenta));
