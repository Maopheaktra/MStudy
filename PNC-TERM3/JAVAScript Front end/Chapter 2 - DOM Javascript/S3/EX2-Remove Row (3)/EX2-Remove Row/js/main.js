let btnRemove = document.querySelectorAll('.btn');
btnRemove.forEach (btn=>{
    btn.addEventListener('click',removeCard);
});
function removeCard(event){
    let row= event.target.closest('tr');
    row.remove();
}

// let btnRemove = document.querySelectorAll('.btn');

// // Add event listener to all btn
// btnRemove.forEach(btn => {
//   btn.addEventListener('click', removeCard);
// });

// // Create function to remove card
// function removeCard(event) {
//   // create one variable to store the row 
//   let row = event.target.closest("tr");
//   row.remove();
  // Confirm removal
//   let confirmRemoval = window.confirm("Are you sure you want to remove this item?");
  
// // if confirm remove the row 
//   if (confirmRemoval) {
//     // Remove the row
    
//   }
// }
