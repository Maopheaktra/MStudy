class Parent {
    // child?: Child;
    name : string;
    constructor (name:string){
        this.name = name;
    }
}
class Child {
    parent?: Parent;
    // size = 4;
}

// Create the objects let the_parent = new Parent();

let Child1 = new Child();
let parent1 = new Parent("Rith");

// parent1.child = Child1;
Child1.parent = parent1;

console.log(Child1.parent);
// console.log(parent1.child.size);

