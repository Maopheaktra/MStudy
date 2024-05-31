class Student {
    constructor(private name:string) {
        this.name = name;
    }
    isEqual(other:Student){
        return this.name === other.name;
    }
    
}
let Student1 = new Student("Tra")
let Student2 = new Student("Tra")
console.log(Student1.isEqual(Student2));
