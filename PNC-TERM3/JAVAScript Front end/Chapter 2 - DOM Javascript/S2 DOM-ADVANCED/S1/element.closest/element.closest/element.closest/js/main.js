let button = document.querySelector('button');
let inner = document.querySelector('.inner');
function deleleElemnt(){
    let inner = button.closest('.inner')
    inner.remove()
    console.log(inner);
}
   

button.addEventListener('click', deleleElemnt);