const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const usermodel = mongoose.model("UserModel");
const { JWT_SECRET } = require('../config');

// Register route to allow users to register
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if mandatory fields are missing
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: "One or more mandatory field is missing" });
        }

        // Check if user with the same email already exists
        const userInDB = await usermodel.findOne({ email: email });
        if (userInDB) {
            return res.status(500).json({ error: "User with this email already registered" });
        }

        // Hash the user's password
        const hashedPassword = await bcryptjs.hash(password, 16);

        // Create a new user and save it
        const user = new usermodel({ firstName, lastName, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ result: "User signed up successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Login route for users to log in with their email and password
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if mandatory fields are missing
        if (!email || !password) {
            return res.status(400).json({ error: "One or more mandatory field is missing" });
        }

        // Find the user with the provided email
        const userInDB = await usermodel.findOne({ email: email });

        // If no user is found, return an error
        if (!userInDB) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }

        // Compare the provided password with the hashed password in the database
        const didMatch = await bcryptjs.compare(password, userInDB.password);

        if (didMatch) {
            // Generate a JWT token for the user
            const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);

            // Send user information and token in response
            const userInfo = { "email": userInDB.email, "firstName": userInDB.firstName, "lastName": userInDB.lastName };
            res.status(200).json({ result: { token: jwtToken, user: userInfo } });
        } else {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
