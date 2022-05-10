/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Events - Mongoose Schema ------------------------------------------------- */

const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema(
    {
        event: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Event',
        },

        assignments: [
            {
                title: {
                    type: String,
                },
                description: {
                    type: String,
                },

                deadline: {
                    type: Date,
                    required: [true, 'Please add an event date'],
                },
                status: {
                    type: Boolean,
                },
                users: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User',
                    },
                ],
                chat: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Chat',
                },
            },
        ],
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Assignment', assignmentSchema);

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
