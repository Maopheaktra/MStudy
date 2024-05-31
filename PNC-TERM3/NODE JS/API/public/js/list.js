// const { response } = require("express");

// const { getAllTask } = require("../../models/models");

// alert("HELLO");
document.addEventListener("DOMContentLoaded", function () {
    const url = "http://localhost:3000";

    function listTask() {
        axios.get(url + "/tasks")
            .then(response=>{
                console.log(response.data.data);
                getTask(response.data.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    
    function show() {
            axios.get(url + "/tasks/" + id)
                .then(response=>{
                    console.log(response.data.data);
                    getAllTask(response.data.data);
                })
                .catch(err=>{
                    console.log(err);
                })
    }

    function getTask(tasks) {
        const container = document.getElementById('container');
        const taskDetailsContainer = document.getElementById('taskDetailsContainer');
        let cardDetail = '';
        cardDetail = `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${tasks.title}</h5>
            <p class="card-text">Status: <span
            class="fw-bold ${tasks.Complete ? 'text-success' : 'text-danger'}">${tasks.Complete ? 'Completed' : 'Incompleted'}</span></p>
        </div>
    </div>`;
    taskDetailsContainer.innerHTML = cardDetail;
    }
    // container.(taskDetailsContainer);

    // function showTasks(tasks) {
        
    // }

    listTask();
})