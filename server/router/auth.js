const express = require('express');
const router = express.Router();

// Define routes within the router
router.get("/",(req,res)=>{
    res.send(`dfghjkl`)
})
router.post('/register', (req, res) => {
    console.log(req.body);
    res.send('User registered');
});

router.post('/login', (req, res) => {
    res.send('User logged in');
});

module.exports = router;
