import { Doctor } from "./Doctor";
import { Employee } from "./employess";
import { person } from "./person";
let person1 = new person("Mean", "BTB Cambodia", "10/03/2004")
let employee1 = new Employee("Pheaktra", "BTB", "10/03/2004", 250, 2025);
let Doctor1 = new Doctor("Momo", "Battambang", "10/03/2004",300,2000, ["Sara,", "Dolipran"]);
let Sokha = new Doctor("Sokha", "France", "27/09/2004",300,2000, ["Angtren", "Konimug"]);
console.log(person1, employee1, Doctor1, Sokha);

console.log(person1.getName(), employee1.getName(), Doctor1.getName());
console.log(person1.getAddress(), employee1.getAddress(), Doctor1.getAddress());
