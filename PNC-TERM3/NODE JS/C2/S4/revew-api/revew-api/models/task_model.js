const { log } = require('console');
const { response } = require('express');
const fs = require('fs');

function load() {
    return JSON.parse(fs.readFileSync("tasks.json"));
}

function save(data) {
    fs.writeFileSync('task.json',JSON.stringify(data));
}
function getAllTask(title = null) {
    const tasks = load();
    if (title) {
        return tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()));
    }
    return tasks;
}

function store(newTask) {
    const tasks = load();
    const task = {
        id: tasks.length+1,
        title: newTask.title,
        completed: newTask.completed
    }
    tasks.push(task);
    save(tasks)
    return task;
}
function show(id) {
    const tasks = load();
    const task = tasks.find(task=> task.id === id);
    return task
}

function destroy(id) {
    const tasks= load();
    const index = tasks.findIndex(tasks => tasks.id === id);
    if (index !== -1) {
        tasks.slice(index,1);
        save(tasks);
        return true;
    }
}

function update(id,data) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const task = {...tasks[index],...data};
        tasks[index] = task;
        save(tasks);
        return task;
    }
}

function updateStatus(id,status){
    const tasks = load();
    const index = tasks.findIndex(tasks =>tasks.id === id);
    if (index !== -1) {
        console.log(tasks[index].completed);
        console.log(status.completed);
        tasks[index].completed = status.completed;
        save(tasks);
        return tasks;
    }
}

function isComplete(id) {
    console.log(id);
    const tasks = load();
    const index = tasks.findIndex(tasks => tasks.id === id);
    if (index != -1) {
        tasks[index].completed = true;
        save(tasks);
        return true;
    }

}

function isNotComplete(id) {
    const tasks = load();
    const index = tasks.findIndex(tasks=>tasks.id === id);
    if (index !== -1) {
        tasks[index].completed = false;
        save(tasks);
        return true;
    }
}

function isCompleted() {
    const tasks = load();
    const task = tasks.filter(task => task.completed === true);
    return task;
}

function isTaskNotCompleted() {
    const tasks = load();
    const task = tasks.filter(task => task.completed === false);
    return task;
}
module.exports.getAllTask = getAllTask;
module.exports.show = show;
module.exports.store = store;
module.exports.destroy = destroy;
module.exports.update = update;
module.exports.updateStatus = updateStatus;
module.exports.isComplete = isComplete;
module.exports.isNotComplete = isNotComplete;
module.exports.isCompleted = isCompleted;
module.exports.isTaskNotCompleted = isTaskNotCompleted;