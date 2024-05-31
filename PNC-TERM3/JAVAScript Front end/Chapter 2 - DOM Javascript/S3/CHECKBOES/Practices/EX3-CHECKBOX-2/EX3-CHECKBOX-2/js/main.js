function getValue(elements){
    const res = []
    for (let element of elements){
        if (element.checked){
            res.push(element.value)
           
        }
    }
    return res
}

function showCase() {
    let arrayCheckbox = getValue(checkboxes);
    let prodoucts = document.querySelectorAll('.product');
    if (arrayCheckbox.length === 0) {
        for (let product of prodoucts) {
            product.style.display = "block";
        }
    } else {
        for (let product of prodoucts) {
            let v = product.lastElementChild.textContent;
            v = v.slice(v.indexOf(":") + 2);
            console.log(v);
            if (arrayCheckbox.includes(v)){
                product.style.display='block';
                console.log(1);
            }else{
                product.style.display='none';
                console.log(2);
            }
        }
    }

}
// Main
const content = document.querySelector('.content');
const checkboxes = document.querySelectorAll('.category');
for (let checkbox of checkboxes){
    checkbox.addEventListener('change',showCase)
}