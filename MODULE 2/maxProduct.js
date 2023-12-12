let fs = require("fs");
let data = fs.readFileSync("maxProduct.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n= parseInt(readLine());
let m = parseInt(readLine());

let a1= readLine().split(" ").map(Number);
let max1 = Math.abs(a1[0]);
for(let i=0;i<n;i++){
      if(max1<Math.abs(a1[i])){
        max1=Math.abs(a1[i]);
      }
}
let a2= readLine().split(" ").map(Number);
let max2 = Math.abs(a2[0]);
for(let i=0;i<m;i++){
  if(max2<Math.abs(a2[i])){
    max2=Math.abs(a2[i]);
  }
}
console.log(max1*max2);