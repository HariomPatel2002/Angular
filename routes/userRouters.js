const express = require('express');
const router = express.Router();
const user = require('../models/users');
const { jwtAuthMiddleware, generateToken } = require('../jwt');
const { successResponse, errorResponse } = require('../utils/response');

// ---------------------- SIGNUP ROUTE ----------------------
router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        console.log('The data is ', data);

        const newUser = new user(data);
        const response = await newUser.save();
        console.log('Data saved');

        const payload = {
            id: response.id,
            username: response.username
        };

        const token = generateToken(payload);
        console.log("Token is : ", token);

        return successResponse(res, { user: savedUser, token }, "Signup successful");

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ---------------------- LOGIN ROUTE ----------------------
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('The req body is ', req.body);

        const existingUser = await user.findOne({ email });
        console.log("The existingUser:", existingUser);

        if (!existingUser) {
            return errorResponse(res, 401, "Email not found");
        }

        const isMatch = await existingUser.comparePassword(password);

        if (!isMatch) {
            return errorResponse(res, 401, "Invalid username or password");
        }

        const payload = {
            id: existingUser.id,
            username: existingUser.username
        };

        const token = generateToken(payload);
        return successResponse(res, { user: existingUser, token }, "Login successful");

    } catch (err) {
        return errorResponse(res, 500, err.message);
    }
});


// ---------------------- GET ALL USERS ----------------------
router.get('/list-of-users', async (req, res) => {
    try {
        const allUsers = await user.find({}, { password: 0 }); // hide passwords

        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }

        res.status(200).json({
            message: "List of users",
            users: allUsers
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
