import { Vehicle } from "./vehicle";

export class batModile extends Vehicle{
    constructor(plateID :string,weigth:number, private isBatmanHere:boolean) {
        super(plateID,weigth);
        this.isBatmanHere = isBatmanHere;
    }
    getSpeed():number{
        let speed= 110;
        if (this.isBatmanHere){
            speed = 500;
        }else {
            speed = speed;
        }
        return speed
    }
}