function setBook() {
    if (input.value === "") {
        return alert("Please enter a book")
    }
    let uniqueId = localStorage.getItem("id");
    if (uniqueId === null){
        uniqueId = 1;
        localStorage.setItem("id",JSON.stringify(uniqueId));
    }else{
        uniqueId = parseInt(uniqueId)+1
        localStorage.setItem("id",JSON.stringify(uniqueId));
    }
    let book = {
        id: uniqueId,
        title: input.value,
    }
    books.push(book)
    saveBook()

    window.location.reload()
    

}
function deleteBook (event){
        // let parent=event.target.closest('tr');
        // parent.remove()
        // console.log(parent);
    
        let index=event.target.closest('tr').dataset.index;
        books.splice(index,1)
    
        console.log(books);
        
    
        saveBook()
        window.location.reload()
        // getBook()
}
function editBook (e){
    let tr = e.target.closest('tr');
    let editer = tr.firstElementChild.nextElementSibling.textContent;
    console.log(editer);
    document.querySelector('input').value = editer;

    let addBtn=document.querySelector('#add');
    addBtn.textContent="update"
    addBtn.removeAttribute('id');
    addBtn.setAttribute('id','update')
}
function updateBook(){

}
function getBook() {
   
    for (let book of books) {
        let tablerow = document.createElement('tr');
        let tdId = document.createElement('td');
        tdId.textContent = book.id;

        let tdTitle = document.createElement('td');
        tdTitle.textContent = book.title

        let tdAction = document.createElement('td');

        let trashBtn = document.createElement('button');
        trashBtn.className = "delete";
        trashBtn.textContent="Delete"
        

        let Editbtn= document.createElement('button');
        Editbtn.classList.add("edit");
        Editbtn.textContent="Edit"



        tablerow.appendChild(tdId);
        tablerow.appendChild(tdTitle);
        tablerow.appendChild(tdAction);

        tdAction.appendChild(trashBtn);
        tdAction.appendChild(Editbtn);
        tbody.appendChild(tablerow)


    }

}



function saveBook() {
    localStorage.setItem('books', JSON.stringify(books));
}

function loadBook() {
    let bookStorage = JSON.parse(localStorage.getItem('books'));
    if (bookStorage != null) {
        books = bookStorage
    }
}

let books = [];
let input = document.querySelector('input');
let bookName = document.querySelector('#book-id');
let btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', setBook)

// let btnDelete=document.getElementsByClassName('delete');
// btnDelete.addEventListener('click',deleteBook)

let tbody = document.querySelector('tbody');
// call the getBook use it to show data from local storerage

loadBook()


getBook()
let btnDeletes = document.querySelectorAll('.delete');
// btn for delete row
for (const btnDelete of btnDeletes) {
    btnDelete.addEventListener('click',deleteBook)
}
// btn for edit row
let btnEdits = document.querySelectorAll('.edit')
for (const btnEdit of btnEdits) {
    btnEdit.addEventListener('click',editBook)
}