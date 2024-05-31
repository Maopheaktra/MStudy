class webAlumni {
    experience_VeuJS: number;
    experience_NodeJS: number;
    Can_code_OOP: boolean;

    constructor (experience_VeuJS: number, experience_NodeJS: number, Can_code_OOP: boolean) {
        this.experience_VeuJS = experience_VeuJS;
        this.experience_NodeJS = experience_NodeJS;
        this.Can_code_OOP = Can_code_OOP;
    }

    getSalary(): number {
        // Base salary
        let salary = 250;

        if (this.experience_VeuJS && this.experience_NodeJS == 0.5 && this.Can_code_OOP == false) {
            salary = salary;
        } if (this.experience_VeuJS == 1 && this.experience_NodeJS == 0.5 && this.Can_code_OOP == false) {
            salary+=100;
        }if (this.experience_VeuJS && this.experience_NodeJS == 2 && this.Can_code_OOP == false) {
            salary += 200;
        } if (this.experience_VeuJS && this.experience_NodeJS ==2 && this.Can_code_OOP == true) {
            salary += 450;
        }
        return salary;
    }
}

const Alumini = new webAlumni(0.5, 0.5, false);
const Alumini1 = new webAlumni(1, 0.5, false);
const Alumini2 = new webAlumni(2,2, false);
const Alumini3 = new webAlumni(2,2, true);
console.log(Alumini.getSalary());
console.log(Alumini1.getSalary());
console.log(Alumini2.getSalary());
console.log(Alumini3.getSalary());

