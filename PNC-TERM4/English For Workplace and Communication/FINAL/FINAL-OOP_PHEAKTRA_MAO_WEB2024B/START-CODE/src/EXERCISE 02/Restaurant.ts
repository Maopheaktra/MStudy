import { Order } from "./Order";
import { MenuItem } from "./MenuItem";
import { Customer } from "./Customer";
export class Restaurant{
    constructor(private name:string,private order: Order[] = [], private menuItem : MenuItem[] = [], private cusomers:Customer[] =[]){
        this.name = name;
    }
    addItem(item: MenuItem): void{
        this.menuItem.push(item);
    }
    placeOrder(customer: Customer, items: MenuItem[]): void{
        this.cusomers.push(customer);
        // this.customer.push(items);

    }
    getOrdersByCustomer(customer: Customer){
        return this.cusomers.push(customer);
    }
}