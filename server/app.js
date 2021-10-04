const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path : './config.env'});

require('./db/conn')
const User = require('./model/userSchema')
app.use(express.json());
app.use(require('./router/auth'));
const port = process.env.PORT;

const middleWare = (req,res,next) => {
    console.log(`this is middleware`);
    next();
};
app.get('/about',middleWare, (req, res) => {
    console.log("hello about")
  res.send('Hello about page !')
});
    app.get('/contact', (req, res) => {
    res.send('Hello contact page !')
});
    app.get('/login', (req, res) => {
    res.send('Hello login page !')
});
    app.get('/signin', (req, res) => { 
    res.send('Hello register page !')
});
app.get('/', (req, res) => {
  res.send('Hello Express from app.js!')
});

app.listen(port, () => {
console.log(`server started on ${port}`);
});