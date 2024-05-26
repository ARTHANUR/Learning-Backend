const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn.js");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("this is HOME page");
});

app.get("/signup", (req, res) => {
    res.send("this is SIGNUP page");
});

app.get("/signin", (req, res) => {
    res.send("this is LOGIN page");
});

app.get("/about", (req, res) => {
    res.send("this is ABOUT page");
});

app.get("/contact", (req, res) => {
    res.send("this is CONTACT page");
});

app.listen(PORT, () => {
    console.log(`server is up and running at ${PORT}`);
});
