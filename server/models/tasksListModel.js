/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Events - Mongoose Schema ------------------------------------------------- */

const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },

        deadline: {
            type: Date,
            required: [false, 'Please add an event date'],
        },
        status: {
            type: Boolean,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },

    {
        timestamps: true,
    }
);

const TasksListSchema = mongoose.Schema(
    {
        event: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Event',
        },

        tasks: [
            {
                type: taskSchema,
            },
        ],
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('TasksList', TasksListSchema);

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
