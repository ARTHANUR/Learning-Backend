const express = require('express');
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

// Define routes within the router
router.get("/", (req, res) => {
    res.send('Welcome to HOME page');
});

router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the fields properly" });
    }

    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ message: "User Already Exists" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        user.save().then(() => {
            return res.status(201).json({ message: "New User Registered" });
        }).catch((err) => {
            return res.status(500).json({ message: "Not Registered" });
        });
    }).catch(err => {
        res.status(500).json({ error: "Database error" });
    });
});

router.post('/login', (req, res) => {
    res.send('User logged in');
});

module.exports = router;
