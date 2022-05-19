/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Events - Mongoose Schema ------------------------------------------------- */

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        //  required: true,

        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        //  required: true,

        name: {
            type: String,
            //  required: [true, 'Please add an event name'],
        },
        date: {
            type: Date,
            //   required: [true, 'Please add an event date'],
        },
        location: {
            type: String,
        },
        image: {
            type: String,
        },

        description: {
            type: String,
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
        },
        tasks: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tasks',
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
