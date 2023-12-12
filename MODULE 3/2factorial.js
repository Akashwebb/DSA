let fs = require("fs");
let data = fs.readFileSync("2factorial.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function factorial(number){
    let fact =1;
    if(number ==0){
        return 1;
    }
    else if(number <0){
        return undefined;
    }
    else{
        for(let i=1;i<=number;i++){
            fact= fact*i;
            console.log(fact);
        }
        return fact;
    }
}
// let f = factorial(5);
// console.log(f);
let number = parseInt(readLine());
console.log(factorial(number));