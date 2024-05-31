let btn = document.querySelector('#okButton');
function setColor(){
   
    let radios = document.getElementsByTagName('colors');
    for (const radio of radios) {
        if (radio.checked){
            body.style.background = radio.value;
        }
    }

}
btn.addEventListener('click',setColor);
