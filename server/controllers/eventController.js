/* ------------------------------------------------------------------------------------------------ */
/* ---- Events Routes Controller ------------------------------------------------------------------ */

const asyncHandler = require('express-async-handler');

const Event = require('../models/eventModel');
const User = require('../models/userModel');
const TasksList = require('../models/tasksListModel');

/**
 @desc    Get user events.
 @route   GET -> /api/events
 @access  Private
*/
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find().where('_id').in(req.user.events).exec();

    for (let i = 0; i < events.length; i++) {
        events[i].users = await User.find(null, '_id email firstName lastName avatar')
            .where('_id')
            .in(events[i].users)
            .exec();
    }

    res.status(200).json(events);
});

/**
 @desc    Get event.
 @route   GET -> /api/events/:id
 @access  Private
*/
const getEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    event.users = await User.find().where('_id').in(event.users).exec();

    res.status(200).json(event);
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

    const contacts = req.body.users.split(' ');
    const users = await User.find().where('email').in(contacts).exec();
    users.push(req.user);

    const event = await Event.create({
        admins: [req.user.id],
        users: users,
        name: req.body.name,
        date: req.body.date,
        location: req.body.location || '',
        image: req.file.path,
        description: req.body.description,
    });

    const tasksList = await TasksList.create({
        event: event._id,
    });

    await Event.findByIdAndUpdate(event._id, {
        $addToSet: {
            tasks: [tasksList._id],
        },
    });

    users.forEach(
        async (user) =>
            await User.findByIdAndUpdate(user._id || user.id, {
                $addToSet: {
                    events: [event._id],
                    tasksList: [tasksList._id],
                },
            })
    );

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

    // Make sure the logged in user matches the event admins
    if (!event.admins.includes(req.user.id)) {
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

    // Make sure the logged in user matches the event admins
    if (!event.admins.includes(req.user.id)) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await event.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getEvents,
    getEvent,
    setEvent,
    updateEvent,
    deleteEvent,
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
