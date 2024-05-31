let card = document.querySelector('.card');
function removeCard(event){
    if (event.target.tagName === 'BUTTON'){
        card.remove();
        
    }
    alert('You delete this message')
}
card.addEventListener('click',removeCard);