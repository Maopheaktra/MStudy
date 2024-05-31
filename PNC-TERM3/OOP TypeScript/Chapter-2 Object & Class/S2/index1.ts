class BankAccount {
    balance:number;
    name:string;
    constructor(balance:number, name:string) {
        this.balance=balance;
        this.name=name;
    }
};
let myAccount = new BankAccount(10000, "tra");
console.log(myAccount);
