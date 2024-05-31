// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
   // 0 - Remove the old container if exists:
  let containers = document.querySelectorAll(".container");
  console.log(containers)
  // if (containers[1] !== undefined) {
  //  containers[1].remove();
  // }

  // 1 - From the parent body : create a new div  (class : container)
  let container = document.createElement("div");
  container.className = "container";
  // container.id = "listOfTasks";

  document.body.appendChild(container);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let task of array) {
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = task.description;

    // the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
    let color = "red";
    if (task.priority === 0) {
      color = "grey";
    }
    item.style.backgroundColor = color;

    container.appendChild(item);
  }
}

function addItem() {
  // 1- Create a new task
  let newTask = {};

  //  2- Set the description from the text field
  descriptionValue = document.getElementById("description").value;
  newTask["description"] = descriptionValue;

  // 3- Set the priority fro from select field
  priorityValue = document.getElementById("priority").value;
  if (priorityValue === "Hight") {
    newTask["priority"] = 1;
  } else {
    newTask["priority"] = 0;
  }

  // 4- Add the new object to the array
  tasks.push(newTask);

  displayArray(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
