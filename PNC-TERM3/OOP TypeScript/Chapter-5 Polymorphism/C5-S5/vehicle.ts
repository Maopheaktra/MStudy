export abstract class Vehicle{
    constructor(private plateID :string,private weigth:number){
        this.plateID = plateID;
        this.weigth = weigth;
    }
    abstract getSpeed():number;
}