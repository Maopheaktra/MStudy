function getValue(elements){
    const result = [];
    for (let element of elements){
        if (element.checked) {
            result.push(element.value)
        }
        
    }
    return result
}
function showPhoto(){
    let arrayCheckbox = getValue(checkboxes);
    let pictures = document.querySelectorAll('.image');
    // if (arrayCheckbox.length == 0) {
    //     for (const picture of pictures) {
    //         picture.style.display = 'block';
    //     }
    // }else{
        for (const picture of pictures) {
            if (arrayCheckbox.includes(picture.getAttribute('data-categories'))) {
                picture.style.display = "block";
                console.log(1);
            } else {
                picture.style.display = "none";

            }
        }


    // }
}
// Main
const content = document.querySelectorAll('.image');
const checkboxes = document.querySelectorAll('.category');
for (const checkbox of checkboxes) {
    checkbox.addEventListener('change',showPhoto);
}