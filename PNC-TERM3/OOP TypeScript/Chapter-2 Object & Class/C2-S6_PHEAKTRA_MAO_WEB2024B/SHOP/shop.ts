class Store {
    name: string;
    product: Product[] = [];
    customer : Customers[] = [];
    constructor(name: string) {
        this.name = name;  
        this.product = []; 
        this.customer = []; 
    }
    // add product
    addProduct(product: Product) {
        this.product.push(product);
    }
    // add customer
    setCustomer(customer: Customers) {
        this.customer.push(customer);
    }

    getProductLessThan(price:number): Product[] {
        let products: Product[] = [];
        for (let i = 0; i < this.product.length; i++) {
            if (this.product[i].price < price) {
                products.push(this.product[i]);
            }
        }
        return products;
    }

    getFeedbackContaining(keyword: string) : Feedback[] {
        let feedback: Feedback[] = [];
        for (let i = 0; i < this.product.length; i++) {
            for (let j = 0; j < this.product[i].feedback.length; j++) {
                if (product[i].feedback[j](keyword)) {
                    feedback.push(this.product[i].feedback[j]);
                }
            }
        }
        return feedback;
    }

    getCustomerComments(customer:Customers): string[]{
        let comments: string[] = [];
        for (let i = 0; i < this.customer.length; i++) {
            for (let j = 0; j < customer[i].comments.length; j++) {
                if (customer[i].comments[j] == comments[j]) {
                    comments.push(customer[i].comments[j]);
                }
            }
        }
        return comments;
    }
}

class Product {
    name: string;
    price: number;
    feedback: Feedback[] = [];
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.feedback = [];
    }
    getFeedback(feedback: Feedback){
        return this.feedback.push(feedback);
    }

  
}

class Feedback {
    comment:string;
    evaluation:number;
    customer: Customers[] = [];
    constructor(comment:string, evaluation:number) {
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = [];
    }
    setCustomer(customers: Customers) {
        // return this.customer.push(customer);
        // let newCustomer = [];
        this.customer.push(customers);
    }
}

class Customers {
    firstName:string;
    lastName:string;
    constructor(firstName:string, lastName:string) {
        this.firstName = firstName
        this.lastName = lastName;
    }
    getFullName():string {
        return this.firstName + " " + this.lastName;
    }
}

// add the prodcut to the store
let store1 = new Store("store1");

// let prodcut1 = store1.addProduct(new Product("product1",200));
let product = new Product("product1",200);
store1.addProduct(product);
console.log(store1);
// Feedback of the product
let feedback1 = new Feedback("Good product!!!!", 9);
product.getFeedback(feedback1);
console.log(product);


let Customer1 = new Customers("Pheaktra", "Mao");
store1.setCustomer(Customer1);
feedback1.setCustomer(Customer1);
let product1 = new Product("LipStick", 2000);
let leesProduct = store1.getProductLessThan(1000);
console.log(leesProduct);
// store1.getProductLessThan(1000);

console.log(store1.getProductLessThan(1000));
console.log(feedback1);