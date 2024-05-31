import { Store } from "./Store";
import { Product } from "./Product";
import { Customer } from "./Customer";
import { Feedback } from "./Feedback";

// CUSTOMERS     -------------------------------------------------------------------------------
let sok = new Customer("Sok", "Seyha");
let him = new Customer("Kim", "Dara");

// PRODUCTS  & FEEDBACKS  -------------------------------------------------------------------------------
let pepsi = new Product("Pepsi", 3);
pepsi.addFeedbacks(new Feedback(him, "Good", 100));
pepsi.addFeedbacks(new Feedback(sok, "very bad", 100));

let pc = new Product("PC", 100);
pc.addFeedbacks(new Feedback(him, "I very love it", 50));
pc.addFeedbacks(new Feedback(sok, "I have it", 50));

let noodle = new Product("Noodle", 20);
let phone = new Product("Sumsung", 40);

// STORE  -------------------------------------------------------------------------------
let aeon = new Store("Aeon");
aeon.addCustomers(him, sok);
aeon.addProducts(pepsi, noodle, phone, pc);

//  TEST API

console.log(aeon.getCommentsFrom(him));
console.log(aeon.getProductsLessThan(20));

console.log(aeon.getFeedbacksWith("very"));
