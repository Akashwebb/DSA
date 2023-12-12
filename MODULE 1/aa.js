let fs = require("fs");
let data = fs.readFileSync("aa.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = readLine().split(" ").map(Number);
 let row;
 let column;
 let a = [];
 let sum=0;
for(let i=0;i<n.length;i++){
 row= n[0];
column = n[1];
}
for(let i=0;i<row;i++){
  let val = readLine().split(" ");
    a[i]=[];

    for(let j=0;j<column;j++){
      a[i][j]=parseInt(val[j]);
      if(a[i][j]%2==1){
        sum=sum+parseInt(a[i][j]);
      }
    }
}console.log(sum);