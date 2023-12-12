let fs = require("fs");
let data = fs.readFileSync("clock.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Clock
// Given two positive integers num1 and num2, the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.

// Input
// Two space seperated values denoting num1, num2 respectively.

// Output
// One integer, denoting the required result.


let arr = readLine().split(" ");
let a = parseInt(arr[0]);
let b = parseInt(arr[1]);

let sum = (a + b) % 12;
if(sum==0){
	console.log(12);
}
else{
console.log(sum);
}