import { Student } from "./SCHOOL";
import { School } from "./SCHOOL";
import { Classroom } from "./SCHOOL";

//student
let student1=new Student("Leak","Smos");
let student2=new Student("Heang","Sava");
let student3=new Student("Kunthea","Sks");
let student4=new Student("Tra","Mean");
console.log(student1);

//school
let Pnc=new School("PNC");
let Abc=new School("Abc");

let classroom1=new Classroom(Pnc,"Khmer");
classroom1.addStudent(student1);
classroom1.addStudent(student2);
// console.log(Pnc);
console.log(Pnc.addClassroom("Pll"));

