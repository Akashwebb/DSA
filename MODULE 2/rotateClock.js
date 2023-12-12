let fs = require("fs");
let data = fs.readFileSync("rotateClock.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let arr= readLine().split(" ");
let n = parseInt(readLine());

for(let i=0;i<n;i++){
  let pop_element= arr.pop();
  arr.unshift(pop_element);
  
}
for(i=0;i<arr.length;i++){
console.log (arr[i]);
}