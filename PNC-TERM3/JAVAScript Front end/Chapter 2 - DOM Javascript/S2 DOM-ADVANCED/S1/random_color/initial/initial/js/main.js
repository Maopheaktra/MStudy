
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('button');
const color = document.querySelector('#result-color')

// return the color string code like example: #f00233
function colorCode() {
   let newColor = "#";
   for(let i = 0; i<6;i++){
      newColor+=hex[getRandomColor()];
   }
   return newColor;
}

// return the number by random number between 0 and 16 (length of hex)
function getRandomColor() {
   let index = Math.floor(Math.random()*hex.length);
   return index
}
console.log(colorCode());

btn.addEventListener('click', function() {
   document.body.style.backgroundColor = colorCode()
   color.textContent = colorCode()
});
