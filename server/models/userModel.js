/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Users - Mongoose Schema -------------------------------------------------- */

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
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
        image: {
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
                assignment: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Assignment',
                },
                budget: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Budget',
                },
            },
        ],
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
