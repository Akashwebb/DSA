let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// {
// let name = readLine();
// let name1 = readLine();
// console.log("hello" , name);
// console.log("hello " + name1); 
// }

let name = readLine();
let customerorder = readLine();
let eat = readLine();

let output = "Hello " + name + "!!!";
console.log(output);

console.log("You ordered "+customerorder + ".");

console.log("hi " , eat);