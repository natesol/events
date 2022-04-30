/* ------------------------------------------------------------------------------------------------ */
/* ---- Users Routes Controller ------------------------------------------------------------------- */

const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

/**
 @desc    Register a new user.
 @route   POST -> /api/users
 @access  Public
*/
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id, true),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

/**
 @desc    Authenticate a user.
 @route   POST -> /api/users/login
 @access  Public
*/
const loginUser = asyncHandler(async (req, res) => {
    const { email, password, remember } = req.body;

    console.log(req.body);

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id, remember),
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

/**
 @desc    Update a user data.
 @route   PUT -> /api/users/:id
 @access  Private
*/
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    const { password } = req.body;

    // Check for user
    if (!req.user) {
        res.status(400);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the requested user
    if (user.id.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { password: hashedPassword },
        {
            new: true,
        }
    );

    res.status(200).json(updatedUser);
});

/**
 @desc    Get user data.
 @route   GET -> /api/users/me
 @access  Private
*/
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id, remember) => {
    const expiresIn = remember ? '30d' : '1h';
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
    updateUser,
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
