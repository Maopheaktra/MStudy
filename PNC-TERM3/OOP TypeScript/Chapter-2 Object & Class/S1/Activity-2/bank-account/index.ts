type BancAccount = {
    balance: number;
    name: string;
}
let Paccount : BancAccount = {balance:4000 , name:"tra"}
function debit(account: BancAccount, valueDollars: number ) {
    account.balance+=valueDollars;

}

debit(Paccount,100);
console.log(Paccount.balance);


function credit(account: BancAccount, valueDollars:number) {
    account.balance -= valueDollars;
}
credit(Paccount,3000);
console.log(Paccount);
