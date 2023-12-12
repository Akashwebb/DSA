let fs = require("fs");
let data = fs.readFileSync("matrix.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let row =parseInt(readLine());
let column=parseInt(readLine());
let a=[];
sum=0;
for(let i=0;i<row;i++){
    a[i]=[];
    //console.log(a);
    for(let j=0;j<column;j++){
        
        a[i][j]=readLine();
        sum=sum+parseInt(a[i][j]);

    }
}console.log(a);
console.log(sum);