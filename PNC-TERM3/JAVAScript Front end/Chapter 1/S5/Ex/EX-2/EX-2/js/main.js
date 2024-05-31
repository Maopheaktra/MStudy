function randomColor(){
    let colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let code = '';
    for (let i = 0; i <6;i++){
        code += colors[Math.floor(Math.random()*16)];
    }
    return ` #${code}`
}

// gradien Random=====
function gradientColor(){
    let color1 = randomColor()
    let color2 = randomColor()
    let position = 'to left top'
    return`linear-gradient(${position},${color1},${color2})`;
}
function changeColor(){
// call gradiencolor======
document.body.style.background = gradientColor()
document.querySelector('h1').textContent =gradientColor()
setTimeout(changeColor,2000)
}
changeColor()