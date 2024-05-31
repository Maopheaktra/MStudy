export abstract class Vechicle{
    private plateID:string;
    private weight:number;
    constructor(plateID:string,weight:number){
        this.plateID=plateID;
        this.weight=weight;
    }
    abstract getSpeed():number;
}