const express = require('express');
const taskModel = require('./models/task_model');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTask(search.title);
    if (tasks) {
        res.status(200).json({success:true, data: tasks});
    }
    res.send(tasks);
})
app.get('/task/:id', (req, res) => {
    const tasks = taskModel.show(parseInt(req.params.id));
    if (!tasks) {
        res.status(404).json({success:false,message:`cannot find any task with ID ${req.params.id}`});
    }else{
        res.status(200).json({success:true, data: tasks});
    }
    res.send(tasks);
})

app.post('/task', (req, res) => {
    const tasks = taskModel.store(req.body);
    if (tasks) {
        res.status(200).json({success:true, data:tasks});
    }
    res.send(tasks);
})

app.delete('/task/:id', (req,res)=>{
    const task = taskModel.destroy(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({success:false,message:`Cannot delete this ID ${req.params.id} because it dosen't have in the task`});
        
    }else{
        res.status(200).json({success:true,message:`delete successfully`});
    }
    res.send(task);
})

app.put('/task/:id',(req,res)=>{
    const tasks = taskModel.update(parseInt(req.params.id),req.body);
    if (!tasks) {
        res.status(404).json({success:false,message:`can't update this ID ${req.params.id}`});
    }else{
        res.status(200).json({success:true,data:tasks});
    }
    res.send(tasks);
})

app.put('/updateStatus/:id',(req,res)=>{
    const task = taskModel.updateStatus(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({success: false, message:`can't find any task with ID ${req.params.id}`});
    }else{
        res.status(200).json({ success: true, data: task });
    }
})

app.put('/task/isComplete/:id',(req,res)=>{
    const tasks = taskModel.isComplete(parseInt(req.params.id));
    if (!tasks) {
        res.status(404).json({success: false, message:`cannot find any task with ID ${req.params.id}`});
    }
    res.status(200).json({success:true, data:tasks});
})


app.put('/task/isNotComplete/:id',(req,res)=>{
    const tasks = taskModel.isComplete(parseInt(req.params.id));
    if (!tasks) {
        res.status(404).json({success: false, message:`cannot find any task with ID ${req.params.id}`});
    }
    res.status(200).json({success:true, data:tasks});
})

app.put('/isCompleted',(req,res)=>{
    const tasks = taskModel.isCompleted();
    res.status(200).json({success:true, data:tasks});
})


app.put('/isTaskNotCompleted', (req,res)=>{
    const tasks = taskModel.isTaskNotCompleted();
    res.status(200).json({success:true, data:tasks});
})


const port = 3000;
app.listen(port, () => {
    console.log('Server run port:' + port);
})