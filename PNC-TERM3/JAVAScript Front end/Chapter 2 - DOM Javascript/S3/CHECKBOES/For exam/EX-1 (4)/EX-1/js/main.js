function randomWord() {
    // todo 
    // convert word in sentence to array list
    let res ='';
    let array = textElement.textContent.split(' ');
    // display random numer as index (0 to array.lenght-1)
    let index =Math.floor(Math.random() * array.length);
    res = array[index]
    output.textContent = res;
}
const textElement = document.querySelector('.text');
const output = document.querySelector('#output');
// todo 

setInterval(randomWord, 1000);