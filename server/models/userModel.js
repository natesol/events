/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Users - Mongoose Schema -------------------------------------------------- */

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        events: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
            },
        ],
        firstName: {
            type: String,
            required: [true, 'Please add a name'],
        },
        lastName: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
        avatar: {
            type: String,
        },
        phone: {
            type: String,
        },
        payment: {
            type: String,
        },
        connections: [
            {
                // type: mongoose.Schema.Types.ObjectId,
                type: String,
                required: false,
                ref: 'User',
            },
        ],
        tasksList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'TasksList',
            },
        ],

        preferences: {
            type: String,
        },

        alerts: [
            {
                title: {
                    type: String,
                },

                message: {
                    type: String,
                },

                budget: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Budget',
                },
            },
        ],
        verified: {
            type: Boolean,
            default: false,
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
