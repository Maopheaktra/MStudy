class School {
    schoolName :string;
    student: Students[] = [];
    director: Director|null = null;
    constructor(schoolName: string) {
        this.schoolName = schoolName;
        this.student = [];
        this.director;
    }
    setStudent(student:Students){
        this.student.push(student);
    }
    setDirector(director:Director){
        this.director = director;
    }
}

class Students {
    students : number;
    constructor(students : number) {
        this.students = students;
    }
}

class Director {
    director:number
    constructor(director:number) {
        this.director= director;
    }
}


const School1 = new School("PNC");
const students1 = new Students(149);
const directore1 = new Director(1);

School1.setStudent(students1);
School1.setDirector(directore1)
console.log(School1);
