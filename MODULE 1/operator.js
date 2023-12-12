// a=10;
// b=3;
// let c ;
// Math.floor(c)=a/b;
// console.log(c);

let fs = require("fs");
let data = fs.readFileSync("operator.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a= parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());
let d = parseInt(b/a);

let e = parseInt(c*d);
console.log(parseInt(e));

// let a= parseInt(readLine());
// let b = parseInt(readLine());
// //let c = 180;
// let d = 180 - (a+b);
// console.log(d);