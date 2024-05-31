abstract class Employee {
    // private contract : Contract[] = [];
    // private teamMembers : Employee[] = [];
    // private skills : Skill[] = []; 

    constructor(private name:string, private employeeType:string) {
    }
    abstract getSalary():number;
    // abstract getSalary():number{
    //     // if(this.employeeType === "COMERCIAL"){
    //     //     return this.constracts.length *400;
    //     // }else if(this.employeeType === "MANAGER"){
    //     //     return this.employeeType.length * 600;
    //     // }else if(this.employeeType === "DEVELOPER"){
    //     //     let salary = this.skills.length*500;
    //     //     if (this.skills.includes("OOP")) {
    //     //         salary +=2000;
    //     //     }
    //     //     return salary;
    //     // }
    //     // return 0;
    // }
}

class Comercial extends Employee {
    getSalary(): number {
        return 400;
    }
}

class  Manager extends Employee {
    teamMember : Employee[] = [];
    // constructor(name: string){
    //     super(name)
    // }
    getSalary(): number {
        return 600;
    }
}

class constracts {
    constructor() {
        
    }
}