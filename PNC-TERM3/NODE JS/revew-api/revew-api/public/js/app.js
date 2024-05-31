document.addEventListener("DOMContentLoaded", function () {
    const url = "http://localhost:3000";

    function listTask() {
        axios.get(url + "/task")
            .then(response => {
                console.log(response.data.data);
                getTask(response.data.data)
            })
            .catch(err => {
                console.log(err);
            })

    }
    function showTask(id) {
        axios.get(url + "/task/" + id)
            .then(response => {
                console.log(response.data.data);
                getTaskDetail(response.data.data)
                claearMessage();
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status == 404) {
                    console.log(err.response.data.message);
                    const errorMessage = document.getElementById("errorMessage");
                    errorMessage.textContent = err.response.data.message;
                    clearDeatail();
                }
            })
    }

    const getTaskBtn = document.getElementById("getTaskBtn");
    getTaskBtn.addEventListener('click', function () {
        const taskIdInput = document.getElementById("taskIdInput");
        // console.log(taskIdInput.value);
        // showTask(taskIdInput.value);
        if (taskIdInput.value == "") {
            alert("Please inter ID ?")
            claearMessage();
            // clearDeatail();
        } else {
            showTask(taskIdInput.value);
        }
    })

    function getTaskDetail(task) {
        const taskDetailsContainer = document.getElementById('taskDetailsContainer');
        let cardDetail = '';
        cardDetail = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${task.title}</h5>
        <p class="card-text">Status: <span
                class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">${task.completed ? 'Completed' : 'Incompleted'}</span></p>
                
    </div>

</div> `;

        taskDetailsContainer.innerHTML = cardDetail;
    }


    function getTask(tasks) {
        const taskID = document.getElementById("taskID");
        let cardHTML = '';

        tasks.forEach(task => {
            cardHTML += `<div class="col">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">Status: <span class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">${task.completed ? 'Completed' : 'Incomplete'}</span></p>
                <button type="button" class="btn btn-primary edit-task" data-task-id="${task.id}" data-bs-toggle="modal" data-bs-target="#editTaskModal">Edit</button>
                <button type="button" class="btn btn-danger delete-task" data-task-id="${task.id}" data-bs-toggle="modal" data-bs-target="#deleteTaskModal">Delete</button>
            </div>
        </div>
        </div>`;
        });

        taskID.innerHTML = cardHTML;
        const editButtons = document.querySelectorAll('.edit-task');
        editButtons.forEach(button => {
            button.addEventListener('click', function () {
                const taskId = this.getAttribute('data-task-id');
                populateEditModal(taskId);
                // console.log(button.getAttribute('data-task-id'));
                // populateEditModal(taskId);
            });
        });
        const deleteButtons = document.querySelectorAll('.delete-task');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const taskId = this.getAttribute('data-task-id');
                deleteTask(taskId);
            });
        });
    }

    function populateEditModal(taskId) {
        axios.get(url + "/task/" + taskId)
            .then(response => {
                const task = response.data.data;
                document.getElementById("editTaskId").value = task.id;
                document.getElementById("editTaskTitle").value = task.title;
                document.getElementById("editTaskCompleted").checked = task.completed;
            })
            .catch(err => {
                console.log(err);
            });
    }

    const updateTaskBtn = document.getElementById("updateTaskBtn");
    updateTaskBtn.addEventListener("click", function () {
        const taskId = document.getElementById("editTaskId").value;
        const taskTitle = document.getElementById("editTaskTitle").value;
        const taskCompleted = document.getElementById("editTaskCompleted").checked;

        const updatedTask = {
            title: taskTitle,
            completed: taskCompleted
        };

        axios.put(url + "/task/" + taskId, updatedTask)
            .then(response => {
                console.log("Task updated:", response.data.data);
                const modalInstance = bootstrap.Modal.getInstance(editTaskModal);
                modalInstance.hide();
                listTask();
            })
            .catch(err => {
                console.error("Error updating task:", err);
            });
    });
    function deleteTask(taskId) {
        axios.delete(url + "/task/" + taskId)
            .then(response => {
                console.log("Task deleted:", response.data.data);
                listTask();
            })
            .catch(err => {
                console.error("Error deleting task:", err);
            });
    }
    function claearMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = '';
    }

    function clearDeatail() {
        const taskDetailsContainer = document.getElementById("taskDetailsContainer");
        taskDetailsContainer.textContent = "";
    }

    function createTask(data) {
        axios.post(url + "/task", data)
            .then(response => {
                console.log(response.data.data);
                // getTask(response.data.data)
                const modalInstance = bootstrap.Modal.getInstance(createTaskModal);
                modalInstance.hide();
                listTask();

            })
            .catch(err => {
                console.log(err);
            })
    }
    const createTaskBtn = document.getElementById("createTaskBtn");
    createTaskBtn.addEventListener("click", function () {
        const taskTitleInput = document.getElementById("taskTitleInput").value;
        const taskCompletedInput = document.getElementById("taskCompletedInput").checked;
        const newTask = {
            "title": taskTitleInput,
            "completed": taskCompletedInput
        }
        createTask(newTask);
        const taskTitle = document.getElementById("taskTitleInput").value = "";
        const taskCompleted = document.getElementById("taskCompletedInput").checked = "";
        // getTaskDetail;
        // location.reload();
    })
    listTask();
})