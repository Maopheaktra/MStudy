import { Vehicle } from "./vehicle";

export class tuctuc extends Vehicle{
    constructor(plateID :string,weigth:number, private numberCustomers:number){
        super(plateID,weigth);
        this.numberCustomers = numberCustomers;
    }
    getSpeed(): number {
        let speed = 130;
        if (this.numberCustomers>0) {
            speed -=5;
        }
        return speed;
    }
}