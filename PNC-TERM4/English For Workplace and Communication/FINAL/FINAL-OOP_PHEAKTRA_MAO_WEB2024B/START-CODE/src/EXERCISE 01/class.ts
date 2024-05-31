import { School } from "./School";
import { Student } from "./students";


export class Classes extends School{
    constructor(name:string, private className:string, private students: Student[] = []){
        super(name);
        this.className = className;
    }
    getClassName():string{
        return this.className;
    }
    addclassMonitor(...students:Student[]) :void{
        students.forEach(s => {
            return this.students.push(s);
        });
    }
    
    
}
