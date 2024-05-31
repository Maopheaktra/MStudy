const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let color = "#"
for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15)
    color += colorCode[index]
    }

function showColor() {
    
    document.body.style.backgroundColor = color;
    document.querySelector('h1').textContent = color;
};
setInterval(showColor, 1000)