let products = [];
let btn = document.getElementById('addProductBtn');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice')
function saveLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(products))
}
function getLocalStorage(){
    let productStorage = JSON.parse(localStorage.getItem('tasks'))
    if (productStorage != null) {
        products = productStorage
    }
    console.log('productStorage',productStorage);
}
function removeStorage(){
    localStorage.removeItem('tasks')
}
function clearStorage(){
    localStorage.clear();
}
function addProduct() {
    let newProduct = {}
    newProduct.name = productName.value;
    newProduct.price = productPrice.value;
    products.push(newProduct)
    saveLocalStorage()
}
btn.addEventListener('click', addProduct);
getLocalStorage();
// removeStorage()
// clearStorage();
console.log("product", products);