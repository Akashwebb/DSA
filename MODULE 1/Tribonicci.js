let fs = require("fs");
let data = fs.readFileSync("Tribonacci.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let t0 =0
let t1=1;
let t2=1;
let n=parseInt(readLine());
let a;
for(let i=0;i<n-3;i++){
  a = 2+2 +i;
}console.log(a);