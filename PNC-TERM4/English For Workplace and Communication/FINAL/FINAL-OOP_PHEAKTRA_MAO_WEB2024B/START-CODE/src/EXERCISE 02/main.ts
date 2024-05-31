import { MenuItem } from './MenuItem';
import { Customer } from './Customer'; 
import { Order } from './Order';
import { Restaurant } from './Restaurant';
//  ------------------MenuItem-----------------
let bigMeal = new MenuItem("Big Meal", "A delicious burger with fries and a drink.A delicious burger with fries and a drink.", 9.99);
let CrispySnack = new MenuItem("Crispy Snack", "Crunchy chips served with a dip.", 7.99);


//  ------------Customer---------------
let john = new Customer("101", "John");
let Alice = new Customer ("102", "Alice");

// ------------add Order------------------------
console.log(john.addMenu(bigMeal,CrispySnack));


// create restaurant