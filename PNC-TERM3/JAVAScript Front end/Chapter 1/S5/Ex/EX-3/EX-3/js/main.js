let person = document.getElementById('person');
const speedX = 3;
let positionX = 0
let isReverseX = true;
let maxWidth = window.innerWidth - 250;
let minWidth = 0
function movePerson() {
    if (isReverseX) {
        person.classList.add('flip')
        positionX += speedX
        person.style.left = positionX + 'px';
    }else{
        person.classList.remove('flip')
        positionX -=speedX;
        person.style.left = positionX + 'px';
    }
    if (positionX >= maxWidth || positionX === minWidth) {
        isReverseX = !isReverseX
    }
    console.log(positionX);
}
setInterval(movePerson, 10);
