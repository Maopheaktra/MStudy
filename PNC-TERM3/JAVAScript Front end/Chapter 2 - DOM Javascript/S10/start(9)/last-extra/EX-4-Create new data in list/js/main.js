function createFruits() {
    let li = document.createElement('li')
    li.textContent = input.value;
    ul.appendChild(li)
    clearData();
}
function clearData(){
    input.value = '';
}
let input = document.querySelector('#fruit');
let ul = document.querySelector(' ul');
let create = document.querySelector('#create');
create.addEventListener('click', createFruits)