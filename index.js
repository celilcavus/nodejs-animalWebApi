const express = require('express');
const app = express();

const body_parser = require('body-parser')


const animalRoute = require('./Routers/AnimalRouter');


app.use(express.json());

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.use('/api',animalRoute);


const animal = require('./Models/Animals');
animal.sync();


app.listen(3000,()=>{
    console.log("Listen to 3000 port");
})