const express = require('express');
const mongoose = require('mongoose');
const User = require('./Model/UserModel');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT;

// connecting database
const url = process.env.DB_URL;
mongoose.connect(url);

//get request
app.get('/test',(req,res)=>{
    res.send('using express app');
});

app.post('/register', async (req,res)=>{
   const {username, password} = req.body;

   await User.create({username, password});
})

//listning to port
app.listen(port);