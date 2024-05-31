import { Person } from "./person";

export class Student extends Person{
    constructor(name:string, age:number, private phone:string){
        super(name, age);
        this.phone = phone;
    }
    getStudentName(){
        return this.name;
    }
}