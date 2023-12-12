let fs = require("fs");
let data = fs.readFileSync('parity.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let a=[];
let min;
let rem=0;
let sum=0;
for(let i=0;i<n;i++){
   a[i]= parseInt(readLine());
   min = a[0];
}

for(let i=1;i<n;i++){
  if(a[i]<min){
    min = a[i];
  }
}//console.log(min);

while (min!=0){
   rem = min % 10;
  sum=sum+rem;
  min=parseInt(min/10);
}
if(sum%2==0){
  console.log(1)
}else{
  console.log(0);
}

