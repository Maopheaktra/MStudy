const fs = require('fs');
const { get } = require('http');

function load() {
    return JSON.parse(fs.readFileSync("tasks.json"));
}

function save(data) {
    fs.writeFileSync("tasks.json",JSON.stringify(data));
}

function getAllTasks() {
    const tasks = load();
    return tasks;
}

module.exports.getAllTasks = getAllTasks;