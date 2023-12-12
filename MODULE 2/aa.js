let fs = require("fs");
let data = fs.readFileSync("aa.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let a = [];
let p=0;
let temp =0;
for(let i=0;i<n;i++){
  a[i]=parseInt(readLine());
}
//a.sort();
for(let i=0;i<a.length;i++){
  for(let j=i+1;j<a.length;j++){
       if(a[i]>a[j]){
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
       }
  }
}
 p =a[a.length-1]*a[a.length-2]*a[a.length-3];
  
console.log(p)