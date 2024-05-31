class Animal {
    constructor(type,name) {
        this.type = type;
        this.name = name;
    }
}

const monkey = new Animal("monkey", "Abu");
console.log(monkey);

monkey.name = "Oscar";
console.log(monkey);
