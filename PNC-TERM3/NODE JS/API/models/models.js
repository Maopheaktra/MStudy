const fs = require('fs');

function load() {
    return JSON.parse(fs.readFileSync("tasks.json"));
}

function save(data) {
    fs.writeFileSync("tasks.json", JSON.stringify(data));
}

function getAllTask() {
    const tasks = load();
    return tasks;
}

function show(id){
    const tasks = load();
    const task = tasks.find(task => task.id === id);
    console.log("task", task);
    return task;
}

function store(newTask) {
    console.log("tasks", newTask);
    const tasks = load();
    console.log(tasks.length !== 0);
    const task={
        id: tasks.length !== 0 ? tasks[tasks.length-1].id + 1 : 1,
        title: newTask.title,
        Complete:newTask.Complete
    }
    tasks.push(task);
    save(tasks);
    return task
}

module.exports.getAllTask = getAllTask;
module.exports.show = show;
module.exports.store = store;