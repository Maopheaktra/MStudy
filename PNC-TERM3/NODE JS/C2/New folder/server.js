const { log } = require('console');
const express = require('express');
const taskModel = require('models/task_models.js');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// =================================================
app.get('/task', function(req,res){
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAlltask(search.title);
    if (tasks) {
        res.status(200).json({success: true, data: tasks});
    }
    res.send(tasks);
})

const port=8000;
app.listen(port, ()=>{
    console.log('Run server port 8000');
})