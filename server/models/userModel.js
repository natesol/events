const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        // name: {
        //     type: String,
        //     required: [true, 'Please add a name'],
        // },
        avatar: {
            type: String,
        },
        phone: {
            type: String,
        },
        payment: {
            type: String,
        },
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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
