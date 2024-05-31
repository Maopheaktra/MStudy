class Person{
    private name:string;
    private yearOfBirth:number;
    constructor(name:string,yearOfBirth:number){
        this.name=name;
        this.yearOfBirth=yearOfBirth
    }
    getName():string{
        return this.name;
    }
    getYearOfBirth():number{
        return this.yearOfBirth;
    }
}


class Calendar{
    private currentYear:number;
    constructor(currentYear:number){
        this.currentYear=currentYear;
    }

    getAge(person:Person):number{
        return this.currentYear-person.getYearOfBirth()
     }
}

let bopha=new Person("KK",2005);
let year2024=new Calendar(2024);
// console.log(bopha.getYearOfBirth());
let ageBopha=bopha.getYearOfBirth();

console.log(year2024.getAge(bopha));
