const url = "http://localhost:3000/task";
axios.get(url)
    .then(response => {
        console.log(response.data.data);
        getTask(response.data.data)
    })
    .catch(err => {
        console.log(err);
    })


function getTask(tasks) {
    const taskID = document.getElementById("taskID");
    let cardHTML = '';
   
    tasks.forEach(task => {
        cardHTML += `<div class="col">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">Status: <span class="fw-bold ${task.completed ? 'text-success':'text-danger'}">${task.completed ? 'Completed':'Incomplete'}</span></p>
            </div>
        </div>
        </div>`;
    });

    taskID.innerHTML = cardHTML;
}
