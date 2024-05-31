const { log } = require('console');
const express = require('express');
const taskModel = require('./models/task_model.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))


const port=3000;
app.listen(port, ()=>{
    console.log('Run server port 3000');
})