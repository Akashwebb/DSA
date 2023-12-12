let fs = require("fs");
let data = fs.readFileSync("simpleintrest.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let pee = readLine();
// let ree = readLine();
// let tee = readLine();
//  simpleintrest = (pee*ree*tee)/100;
// console.log(simpleintrest);

let a1= parseInt(readLine());
let a2= parseInt(readLine());
let a3= parseInt(readLine());

a4= parseInt(a2-a1);
a5= a4+a3;
console.log(a5);