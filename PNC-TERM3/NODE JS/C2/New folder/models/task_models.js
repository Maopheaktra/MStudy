const { log } = require('console');
const { response } = require('express');
const fs = require('fs');
// const { takeCoverage } = require('v8');

function load() {
    return JSON.parse(fs.readFileSync("tasks.json"));
}

function save(data) {
    fs.writeFileSync('tasks.json', JSON.stringify(data));
}

function getAlltask() {
    const tasks = load();
    // if (title) {
    //     return tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()));
    // }
    return tasks;
}

module.exports.getAlltask = getAlltask;