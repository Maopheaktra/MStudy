const keyboardEvent = (event) => {
    // TODO 
    // https://www.w3schools.com/jsref/event_key_key.asp
    let h1 = document.querySelector('h1');
    let key = event.key;
    h1.textContent = key;
}

document.addEventListener('keydown', keyboardEvent)