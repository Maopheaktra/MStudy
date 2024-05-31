import { Vehicle } from "./vehicle";
export class miniVan extends Vehicle {
    constructor(plateID :string,weigth:number,private numberOfCustomers:number, private numberOfLugage:number) {
        super(plateID,weigth);
        this.numberOfCustomers = numberOfCustomers;
        this.numberOfLugage = numberOfLugage;
    }
    getSpeed(): number {
        let speed = 300;
        if (this.numberOfCustomers>0) {
            speed -=10;
        }if (this.numberOfLugage>0) {
            speed -= 5
        }
        return speed;
    }

}