import { School } from "./School";
import { Classes } from "./class";
import { Student } from "./students";

let Student1 = new Student("Pheaktra", 16, "093721594");
let Student2 = new Student("Sambath", 16, "093721594");
let Student3 = new Student("Cheath", 16, "093721594");
let Student4 = new Student("Riya", 16, "093721594");
console.log(Student1);


let School1 = new School("PNC");

// -----------Create a new class ----------------
let class1 = new Classes("PNC", "WEBA");
let class2 = new Classes("PNC", "WEBB");
let class3 = new Classes("PNC", "WEBC");
let class4 = new Classes("PNC", "SNA");

console.log(School1.addClass(class2,class3,class4,class1));

class1.addclassMonitor(Student1,Student3);
console.log(class1);

