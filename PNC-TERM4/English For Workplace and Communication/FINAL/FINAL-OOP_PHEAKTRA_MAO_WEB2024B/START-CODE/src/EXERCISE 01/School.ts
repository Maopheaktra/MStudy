import { Classes } from "./class";
// import { Student } from './students';
export class School{
    constructor(private name:string,private classes:Classes[] = []){
        this.name = name;
        this.classes = []
    }
    addClass(...classes:Classes[]):void{
        classes.forEach(c => {
            return classes.push(c);
        });
    }
}

// class Classes extends School{
//     constructor(name:string, private className:string, private students: Student[] = []){
//         super(name);
//         this.className = className;
//     }
//     getClassName():string{
//         return this.className;
//     }
//     addclassMonitor(...students:Student[]) :void{
//         students.forEach(s => {
//             return this.students.push(s);
//         });
//     }
    
    
// }
