
function getValue(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result
}

function showCase() {
    
    const cards = document.querySelectorAll('.card'); //list card
    let arrayCheckbox = getValue(checkboxes); // list array checkbox
    if(arrayCheckbox.length===0){
        for (const card of cards) {
            card.style.display ='block';   
        }
    }else{
        for(card of cards){
            const language=card.querySelector('h1').textContent;
            if (arrayCheckbox.includes(language)) {
                card.style.display ='block';
            }else{
                card.style.display ='none'
            }
        };
    }
    // TODO: 
    //If there is no check, all cards is visible
    //If at least one of them is checked display that card to block otherwise is invisible.

}

// Main
const content = document.querySelector('.content');
const checkboxes = document.querySelectorAll('.lang');



for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}
