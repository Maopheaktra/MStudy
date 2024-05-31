import { Vechicle } from "./vechicle";
export class Minivan extends Vechicle{
    private numberCustomers:number;
    private numberLuggage:number;
    constructor(plateID:string,weight:number,numberCustomers:number,numberLuggage:number){
        super(plateID,weight);
        this.numberCustomers=numberCustomers;
        this.numberLuggage=numberLuggage;
    }
    getSpeed(): number {
        let speed=130;
        if(this.numberCustomers>0){
            speed-=10;
        }if(this.numberLuggage>0){
            speed-=5
        }
        return speed;
    }
}