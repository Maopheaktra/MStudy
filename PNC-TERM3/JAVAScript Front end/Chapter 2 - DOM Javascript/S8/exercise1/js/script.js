// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let container = document.createElement('div')
  container.setAttribute('class', 'container');

  for (const task of tasks) {
    // 2 - For all tasks,  create a new div (class : item), (textContent : task.description)
    let item = document.createElement('div');
    item.setAttribute('class', 'item')
    item.textContent = task.description;
    let color = ""
    // 3 - The priority defines the color of your task (1 (HIGH) = red, 0 (LOW) = gray)
    if (task.priority === 1) {
      color = "red"
    } else {
      color = "gray"
    }
    item.style.background = color;
    // 4 - append it the container
    container.appendChild(item)
    // 5 - append div class container to body
    body.appendChild(container)
  }

  console.log(body);
}
let body = document.querySelector('body')
displayArray(tasks);
