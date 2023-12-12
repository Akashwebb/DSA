let fs = require("fs");
let data = fs.readFileSync("suffelArray.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let a=[];
let b = [];

for(let i=0;i<n;i++){
  a[i]=parseInt(readLine());  //2 , 5 , 1
  }

  for(let i=0;i<n;i++){      //3 , 4 , 7
  b[i]=parseInt(readLine());
}


let f =[];
for(let i=0;i<n;i++){
  f.push(a[i],b[i]);
}
for(let i=0;i<2*n;i++){
  console.log(f[i]);
}