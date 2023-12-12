let fs = require("fs");
let data = fs.readFileSync("pascal.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
function PascalTriangle(num) {
  let n = num - 1;
  let arr = [];
  let prev = 1; //nC0
  arr.push(prev);
  //console.log(n);
  for (let i = 1; i <= n; i++) {
    // nCi = (nCi-1 * (n-i+1))/i
    curr = (prev * (n - i + 1)) / i;
    arr.push(curr);
    prev = curr;
  }
  return arr;
}
let ans = PascalTriangle(n);
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}