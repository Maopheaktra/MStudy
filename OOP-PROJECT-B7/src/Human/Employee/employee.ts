import { Gender, Person } from "../Person";

export enum crewMember{
    CHEF,
    PILOT,
    CO_PILOT,

}
// export abstract class Employee extends person {
export abstract class Employee extends Person{
    protected salary: number = 0; //by default
    constructor(
        Name: string, 
        email: string, 
        gender:Gender,
        protected Category : crewMember

    ){
        super(Name,email,gender);
            this.Category = Category
    }
    setSalary(salary:number){
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getCateory(){
        return this.Category;
    }
}