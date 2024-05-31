export class MenuItem {
    constructor(private name:string, private description:string, private price:number){
        this.name = name;
        this.price = price;
    }
    getMenu(){
        return this.price;
    }
}