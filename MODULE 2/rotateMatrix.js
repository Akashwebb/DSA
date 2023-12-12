let fs = require("fs");
let data = fs.readFileSync("rotateMatrix.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let a =[];
for(let i=0;i<n;i++){
  let col= readLine().split(" ").map(Number)
   a[i] = [];
   for(let j=0;j<col.length;j++){
    a[i][j]= parseInt(col[j])
    
   }
}console.log(a)
 console.log(a[0].length);
 let t = [];
 for(let i=0;i<a[0].length;i++){
  let row = [];
  for(let j=n-1;j>=0;j--){
    row.push(a[j][i])
    
    }
  t.push(row);
 }
 for(let i=0;i<t.length;i++){
 console.log(...t[i])
 }