class Calculator {
    number1:number;
    number2: number;
    constructor(number1:number, number2:number){
        this.number1=number1;
        this.number2 = number2;
    }
    sum():number{
        return this.number1+this.number2;
    }
    minus():number{
        return this.number1-this.number2;
    }
    devide():number{
        return this.number1/this.number2;
    }
    multiply(){
        return this.number1*this.number2;
    }

}

let SUM = new Calculator(2,3);
console.log(SUM.sum());
console.log(SUM.devide());
console.log(SUM.multiply());
console.log(SUM.minus());
