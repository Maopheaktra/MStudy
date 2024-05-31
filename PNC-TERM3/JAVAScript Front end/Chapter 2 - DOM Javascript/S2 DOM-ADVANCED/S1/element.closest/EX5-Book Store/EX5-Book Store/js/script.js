//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  let deleted = event.target.className;
  if (deleted === 'delete'){
    event.target.closest('li').remove();
  }
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let book = document.getElementById('add-book-textfield');
  let book_name = book.value;
  // 2- Create a new spam bookName for the book name, class name = name
  let bookName = document.createElement('span');
  bookName.setAttribute("class", "name");
  bookName.textContent = book_name;
  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  let deleteBtn = document.createElement('span');
  deleteBtn.setAttribute('class', 'delete');
  deleteBtn.textContent = "delete";
  // 4- Create a new li
  let li = document.createElement('li');
  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  bookList.appendChild(li);
}

function searchBook(event) {

  // 1- Get the search text
  let searchBook = document.querySelector("#search-books input").value;

  console.log(searchBook);
  // // 2- Loop on all LI
  let lis = document.querySelectorAll('li');
  lis.forEach(li =>{
    let bookName = li.firstElementChild.textContent.toLowerCase();
    if(bookName.includes(searchBook.toLowerCase())){
      li.style.display = 'block'
    }else{
      li.style.display = 'none'
    }
  });
  // Update the style of the LI (visible or hidden)

}




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
