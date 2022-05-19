/* ------------------------------------------------------------------------------------------------ */
/* ---- tasks Routes Controller ------------------------------------------------------------------ */

const asyncHandler = require('express-async-handler');

const Event = require('../models/eventModel');
const User = require('../models/userModel');
const Tasks = require('../models/tasksModel');

/**
 @desc    Get user tasks.
 @route   GET -> /api/tasks
 @access  Private
*/
const gettasks = asyncHandler(async (req, res) => {
    const tasks = await task.find().where('_id').in(req.user.tasks).exec();

    console.log(tasks);

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].users = await User.find(null, '_id email firstName lastName avatar')
            .where('_id')
            .in(tasks[i].users)
            .exec();
    }

    res.status(200).json(tasks);
});

/**
 @desc    Get task.
 @route   GET -> /api/tasks/:id
 @access  Private
*/
const gettask = asyncHandler(async (req, res) => {
    const task = await task.findById(req.params.id);
    task.users = await User.find().where('_id').in(task.users).exec();

    res.status(200).json(task);
});

/**
 @desc    Create a new tasks list.
 @route   POST -> /api/tasks
 @access  Private
*/
const setTasks = asyncHandler(async (req, res) => {
    const contacts = req.body.users.split(' ');
    const users = await User.find().where('email').in(contacts).exec();
    users.push(req.user);

    // const task = await task.create({
    //     creator: req.user.id,
    //     users: users,
    //     title: req.body.name,
    //     description: req.body.date,
    //     deadline: req.body.location || '',
    //     status: req.file.path,
    // });

    users.forEach(
        async (user) =>
            await User.findByIdAndUpdate(user._id || user.id, { $addToSet: { tasks: [task._id] } })
    );

    res.status(200).json(task);
});

/**
 @desc    Update an task.
 @route   PUT -> /api/tasks/:id
 @access  Private
*/
const updatetask = asyncHandler(async (req, res) => {
    const task = await task.findById(req.params.id);

    if (!task) {
        res.status(400);
        throw new Error('task not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the task admins
    if (!task.admins.includes(req.user.id)) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedtask = await task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedtask);
});

/**
 @desc    Delete an task.
 @route   DELETE -> /api/tasks/:id
 @access  Private
*/
const deletetask = asyncHandler(async (req, res) => {
    const task = await task.findById(req.params.id);

    if (!task) {
        res.status(400);
        throw new Error('task not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the task admins
    if (!task.admins.includes(req.user.id)) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await task.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getTasks,
    getTask,
    setTasks,
    updateTask,
    deleteTask,
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
