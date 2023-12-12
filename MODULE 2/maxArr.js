let fs = require("fs");
let data = fs.readFileSync("maxArr.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let firstnum = parseInt(readLine());
let ar=[];
let max = firstnum;
console.log(max);
for(let i=1;i<n;i++){
    
    ar[i]=parseInt(readLine());
    
    if(ar[i]>max){
        max=ar[i];
       
    }
    console.log(parseInt(max));
}