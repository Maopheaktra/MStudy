class Bob {
    private name:string = "test";

    getName(){
        return this.name;
    }
}

let myBob = new Bob();
let bobName = myBob.getName();
bobName = "ronan";
console.log(myBob.getName());
