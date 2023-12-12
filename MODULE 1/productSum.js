let fs = require("fs");
let data = fs.readFileSync("productSum.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Product & SUM
// Given an integer n, return the difference between the product of its digits and the sum of its digits. Assume that n is a non-negative integer.
// Input -- 234
// One line containing an integer, denoting n    
// Output --  15
// One line containing an integer, denoting the difference between product and sum of the digits of n

let num = parseInt(readLine());
let prodt = 1;
let temp = 0;
let sum=0;
if(num==0)
{
    console.log(0);
}
else{
while(num !=0) {
    temp = num % 10;
    prodt = prodt * temp;
    sum=sum+temp;
    num = parseInt(num / 10);
} 
let final =prodt-sum;
console.log(final);
}

