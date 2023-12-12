let fs = require("fs");
let data = fs.readFileSync("arrayleader.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n= parseInt(readLine()); //16  17  4  3  5  2
let a = [];
for(let i=0;i<n;i++){
  a[i]=parseInt(readLine());
}
let res=[];
res.push(a[n-1]);
for(let i=n-2;i>=0;i--){
  if(a[i]>res[res.length-1])
  res.push(a[i]);
}
for(let i=0;i<res.length;i++){
  console.log(res[i]);
}