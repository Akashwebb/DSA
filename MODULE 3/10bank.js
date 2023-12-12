let fs = require("fs");
let data = fs.readFileSync("10bank.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// your class name should be 'BankAccount' and method names as 'credit' and 'debit'
class BankAccount{
     constructor(){
        this.balance=0;
        }
    credit(t){
        if(t>0)
        this.balance +=t;
        }
    debit(t){
        if(t>0)
        this.balance -= t;
        }
}
let n = parseInt(readLine());
let myAccount = new BankAccount(); // no agrument , so line 14 constructor have no argument
for (let index = 0; index < n ; index++) {
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") {
    myAccount.debit(transactionAmount); // debit have a parameter , so line 21 debit took t as parameter
  } else {
    myAccount.credit(transactionAmount);
  }
}
console.log(myAccount.balance); //myAccount object called .balance ,not any function ()
                              // so NO return in debit() or credit()