const colorCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f']

// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp
let colorCode="#";
for (let i = 0; i < 6; i++) {
    let index=Math.floor(Math.random()*colorCodes.length);
    colorCode+=colorCodes[index];
};
// set background color to body =  color code
document.body.style.background = 'liner-gradient(to left,blue,red';
