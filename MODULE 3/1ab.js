let fs = require("fs");
let data = fs.readFileSync("1ab.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n=parseInt(readLine());
let a =[];

for(let i=0;i<n;i++){
   a[i]=parseInt(readLine());
}
min=a[0];
for(let i=1;i<n;i++){
   
  if(min>a[i]){
    min=a[i];
  }
}
max=a[0];
for(let i=1;i<n;i++){
  
 if(max<a[i]){
   max=a[i];
 }
}
console.log(min*max);