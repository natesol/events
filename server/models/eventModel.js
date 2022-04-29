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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Event', eventSchema);
