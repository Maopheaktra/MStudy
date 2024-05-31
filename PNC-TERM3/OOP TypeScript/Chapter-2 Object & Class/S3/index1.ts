class School {
    Name: string;
    students: Students[] = [];
    constructor(Name: string) {
        this.Name = Name;
        this.students = [];
    }
    allStudents(student:Students){
        this.students.push(student);
    }

}

class Students {
    nameOfStudent : string;
    age: number
    constructor(nameOfStudent : string, age:number) {
        this.nameOfStudent = nameOfStudent;
        this.age = age;
    }
}


const School1 = new School("PNC");
const numberOfStudents = new Students("Pheaktra", 20);

School1.allStudents(numberOfStudents);
console.log(School1);

