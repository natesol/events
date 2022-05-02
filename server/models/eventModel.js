/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Events - Mongoose Schema ------------------------------------------------- */

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        admins: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User',
            },
        ],
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User',
            },
        ],
        name: {
            type: String,
            required: [true, 'Please add an event name'],
        },
        date: {
            type: Date,
            required: [true, 'Please add an event date'],
        },
        location: {
            type: String,
        },
        image: {
            type: String,
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
        },
        assignments: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Assignments',
        },
        budget: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Budget',
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Event', eventSchema);

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
