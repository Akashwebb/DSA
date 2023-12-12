let fs = require("fs");
let data = fs.readFileSync("operator.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let a= parseInt(readLine()); //2
let b = parseInt(readLine()); //4
let c = parseInt(readLine()); //8
let d = (b/a); //2

let e = (c*d);
console.log(parseInt(e));