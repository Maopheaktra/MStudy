let button = document.querySelector("button");
let input = document.getElementById("goal");
let list = document.querySelector("ul");
button.addEventListener("click", function() {
        let listItem = document.createElement("li");
        listItem.textContent = input.value;
        list.appendChild(listItem);
});