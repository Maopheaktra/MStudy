var BankAccount = /** @class */ (function () {
    function BankAccount(balance, name) {
        this.balance = balance;
        this.name = name;
    }
    return BankAccount;
}());
;
var myAccount = new BankAccount(10000, "tra");
console.log(myAccount);
