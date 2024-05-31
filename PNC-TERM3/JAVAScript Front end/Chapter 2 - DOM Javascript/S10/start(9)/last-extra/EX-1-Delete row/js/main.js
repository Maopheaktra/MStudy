let btnRemoves = document.querySelectorAll('.btn')
for (const buttonremove of btnRemoves) {
    buttonremove.addEventListener('click',removeTable)
}
function removeTable(event){
    let tr = event.target.closest('tr');
    tr.remove();
}