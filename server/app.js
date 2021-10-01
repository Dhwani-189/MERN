const express = require('express');
const app = express();

app.get('/' , (req , res) => {
res.send(`hello from server`);
});
app.get('/about' , (req , res) => {
res.send(`hello AboutMe from server`);
});
app.get('/contact' , (req , res) => {
res.send(`hello contact from server`);
});
app.get('/signIn' , (req , res) => {
res.send(`hello login from server`);
});
app.get('/signup' , (req , res) => {
res.send(`hello registartion from server`);
});

app.listen(3000 , () => {
    console.log(`running on port number 3000`)
})