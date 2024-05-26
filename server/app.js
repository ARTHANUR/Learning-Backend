const mongoose = require("mongoose")
const express = require("express")
const app = express();

const DB = `mongodb+srv://sarthanur:12345@cluster0.z4gwwqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(DB).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log("no connection")
})

app.get("/",(req,res)=>{
    res.send("this is HOME page")
})

app.get("/signup",(req,res)=>{
    res.send("this is SIGNUP page")
})

app.get("/signin",(req,res)=>{
    res.send("this is LOGIN page")
})

app.get("/about",(req,res)=>{
    res.send("this is ABOUT page")
})

app.get("/contact",(req,res)=>{
    res.send("this is CONTACT page")
})

app.listen(3000,()=>{
    console.log("server is up and running at 3000")
})