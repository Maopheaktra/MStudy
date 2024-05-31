var Paccount = { balance: 4000, name: "tra" };
function debit(account, valueDollars) {
    account.balance += valueDollars;
}
debit(Paccount, 100);
console.log(Paccount.balance);
function credit(account, valueDollars) {
    account.balance -= valueDollars;
}
credit(Paccount, 3000);
console.log(Paccount);
