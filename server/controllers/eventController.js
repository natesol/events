/* ------------------------------------------------------------------------------------------------ */
/* ---- Events Routes Controller ------------------------------------------------------------------ */

const asyncHandler = require('express-async-handler');

const Event = require('../models/eventModel');
const User = require('../models/userModel');

/**
 @desc    Get user events.
 @route   GET -> /api/events
 @access  Private
*/
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.findById(req.user.id);
    console.log(Event);

    res.status(200).json(events);
});

/**
 @desc    Create a new event.
 @route   POST -> /api/events
 @access  Private
*/
const setEvent = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please add event name');
    }

    /* const users = req.body.map(async (mail) => {
        return await User.findOne({ email: mail }).exec()._id;
    });*/

    const contacts = req.body.users.split(' ');
    const users = [];

    for (let index = 0; index < contacts.length; index++) {
        users[index] = await User.findOne({ email: contacts[index] }).exec();
    }
    console.log(users);
    console.log(contacts);

    const event = await Event.create({
        admins: [req.user.id],
        users: users,
        name: req.body.name,
        date: req.body.date,
        location: req.body.location || '',
    });

    res.status(200).json(event);
});

/**
 @desc    Update an event.
 @route   PUT -> /api/events/:id
 @access  Private
*/
const updateEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        res.status(400);
        throw new Error('Event not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the event user
    if (event.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedEvent);
});

/**
 @desc    Delete an event.
 @route   DELETE -> /api/events/:id
 @access  Private
*/
const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        res.status(400);
        throw new Error('Event not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the event user
    if (event.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await event.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent,
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
