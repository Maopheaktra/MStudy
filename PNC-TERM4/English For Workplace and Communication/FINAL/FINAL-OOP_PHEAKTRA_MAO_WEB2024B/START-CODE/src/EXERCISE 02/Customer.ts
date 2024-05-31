import { Order } from './Order';
import { MenuItem } from './MenuItem';
export class Customer{
    constructor(private Id: string, private name:string, private order:Order[] = [], private items:MenuItem[] = []){
        this.Id = Id;
        this.name = name;
    }
    getName (){
        return this.name;
    }
    addMenu(...item :MenuItem[]):void{
        item.forEach(i => {
            this.items.push(i);
        });
    }
    getMenuItem(item : MenuItem) : MenuItem[]{
        return this.items.filter(i => i.getMenu() === item.getMenu())
    }
}