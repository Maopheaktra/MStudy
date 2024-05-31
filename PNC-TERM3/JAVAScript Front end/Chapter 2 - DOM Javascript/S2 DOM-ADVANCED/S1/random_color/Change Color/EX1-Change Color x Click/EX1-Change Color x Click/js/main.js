
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function changeColor() {
    document.body.style.backgroundColor = randomColor()
};
alert("I love you");
// click on browser window to change color
document.addEventListener('click', changeColor)