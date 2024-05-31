export enum Gender{
    Male,
    Female
}

export abstract class Person{
    
    protected Name :string
    protected email : string
    protected gender: Gender
    constructor(Name:string,email: string, gender:Gender){
      this.Name = Name
      this.email = email
      this.gender = gender
    }
    getName(): string{
        return this.Name;
    }
    
}

