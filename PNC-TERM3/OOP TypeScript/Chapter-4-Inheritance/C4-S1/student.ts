class person {
    constructor(private nam:string){

    }
}
// import { person } from "./person";

class student extends person {
    constructor(name: string, private batch:string){
        super(name);
        this.batch = batch;
    }
}