class UserAccount{
    private name: string;
    private balance: number;
    constructor(name: string, balance: number){
        this.name = name;
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        this.balance -= amount;
    }
    //getter
    getBalance(): number {
        return this.balance;
    }
    getName(): string {
        return this.name;
    }
    //setter
    setName(name: string): void {
        this.name = name;
    }
}

let yon = new UserAccount("Yen Yon",20);
yon.deposit(30);
yon.withdraw(30);
yon.setName("Phal");
console.log(yon.getBalance());
console.log(yon.getName());