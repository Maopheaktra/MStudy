import { Vechicle } from "./vechicle";
export class vechicleConvoy {
    vechicels:Vechicle[]=[];
    constructor(){}
    addViechicle(vechicel:Vechicle){
        return this.vechicels.push(vechicel);
    }

    getMaxSpeed():number{
        let maxSpeed=0;
        this.vechicels.forEach(vechical=>{
            if(vechical.getSpeed()>maxSpeed){
                maxSpeed=vechical.getSpeed();
            }
        });
        return maxSpeed;
    }
}