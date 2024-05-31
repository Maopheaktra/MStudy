import { Vechicle } from "./vechicle";
export class BatMobile extends Vechicle{
    private isBatmanHere:boolean;
    constructor(plateID:string,weight:number,isBatmanHere:boolean){
        super(plateID,weight);
        this.isBatmanHere=isBatmanHere;
    }
    getSpeed(): number {
        let speed=110;
        if(this.isBatmanHere){
            speed=500;
        }
        return speed;
    }
}