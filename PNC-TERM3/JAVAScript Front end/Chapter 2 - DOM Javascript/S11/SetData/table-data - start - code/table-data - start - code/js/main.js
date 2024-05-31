function getTotal() {
    // TODO 
    let price = 0
    for (const tr of rows) {
        let totalPrices = tr.lastElementChild.textContent.replace('$','');
        price += parseInt(totalPrices)
    }
    total.textContent = price.toString() + '$';
}

function getQuantities(e) {
    // TODO     
    // update total
    let qty = e.target.value;
    let tdContent = e.target.closest('td').nextElementSibling.textContent
    let unitPrice = tdContent.replace('$','');
    let totalPrice = parseInt(qty)*parseInt(unitPrice);
    let lastChild = e.target.closest('tr').lastElementChild;
    lastChild.textContent = totalPrice.toString() + '$';
    getTotal();
}
let rows = document.querySelectorAll('tbody tr');
let quantities = document.querySelectorAll('input');
let total = document.querySelector('.total');
for (let qty of quantities) {
    qty.addEventListener('change', getQuantities);
}

getTotal();