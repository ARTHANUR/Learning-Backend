const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn.js");

// Initialize express.json() before using the router
app.use(express.json());

app.use(require("./router/auth.js"));

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
