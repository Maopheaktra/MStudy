import { MenuItem } from './MenuItem';
import { Customer } from './Customer';
export class Order {
    constructor(private menuItem : MenuItem[] = [], private customers : Customer[] = [] ){}
    getCustomerOder(item: MenuItem):Customer[]{
        return this.customers.filter(c=>c.getMenuItem(item).length>0)
    }
    
}