//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  if (event.target.className === "delete") {
    event.target.closest('li').remove();

  }
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let bookNameInput = document.getElementById('add-book-textfield');
  let bookName = bookNameInput.value;


  // 2- Create a new span bookName for the book name, class name = name
  let spanBookName = document.createElement('span');
  spanBookName.setAttribute('class', 'name')
  spanBookName.textContent = bookName;


  // 3- Create a new span deleteBtn for the button delete, class name = delete
  let spanDeleteBtn = document.createElement('span');
  spanDeleteBtn.setAttribute('class',"delete")
  spanDeleteBtn.textContent = 'delete';


  // 4- Create a new li
  let Li = document.createElement('li');

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  Li.appendChild(spanBookName);
  Li.appendChild(spanDeleteBtn);
  bookList.appendChild(Li);

}
// =======================SEARCH========================
function searchBook(event) {

  // 1- Get the search text
  const searchText = event.target.value.toLowerCase();

  // 2- Loop on all LI
  const bookList = document.querySelectorAll('li');

  for (let book of bookList) {
    const title = book.querySelector('.name').textContent.toLowerCase();

    // Update the style of the LI (visible or hidden)
    if (title.includes(searchText)) {
      book.style.display = 'block'; // Show the book
    } else {
      book.style.display = 'none'; // Hide the book
    }


  }
}
// ======================REMOVE===========================
// let btnRemove = document.querySelectorAll('.delete');

// // Add event listener to all btn
// for (let btn of btnRemove) {
//   btn.addEventListener('click', deleteBook);
// };

// // Create function to remove card
// function deleteBook(event) {
//   // create one variable to store the row 
//   let row = event.target.closest('li');
//   row.remove()
// ++++++++++++++++++++++++++++++++++++
//   // Confirm removal
//   let confirmRemoval = window.confirm("Are you sure you want to remove this item?");

// // if confirm remove the row 
//   if (confirmRemoval) {
//     // Remove the row
//     row.remove();
//   }



//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
