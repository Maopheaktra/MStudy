import { Gender } from "../Person";
import { crewMember, Employee } from "./employee";

class Chef extends Employee{
    constructor(
        Name:string,
        email: string, 
        gender:Gender,
        Category:crewMember

    ){
        super (Name,email,gender, Category);
    }
    
}