let fs = require("fs");
let data = fs.readFileSync("aaa1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n =parseInt(readLine());
let x =0;
for(let i =1;i<=n;i++){
  x= x+i;
}console.log(x);