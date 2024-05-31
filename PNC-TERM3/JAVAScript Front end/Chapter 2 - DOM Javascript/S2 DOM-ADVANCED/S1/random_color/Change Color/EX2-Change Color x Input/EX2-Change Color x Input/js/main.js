


function changeColor() {
    // TODO
    document.body.style.background = inputColor.value;
    // console.log(inputColor.value);
}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)