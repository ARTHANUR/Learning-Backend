const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env' });
require('./db/conn');

// Ensure express.json() is initialized before using the router
app.use(express.json());

// Use the router middleware
app.use(require('./router/auth'));

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
