let fs = require("fs");
let data = fs.readFileSync("transposeMatrix.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// let n = parseInt(readLine());
// let a=[];
// //let v;
// for(let i=0;i<n;i++){
//   let v = readLine().split(" ");
//   a[i]=[];
//   for(let j=0;j<v.length;j++){
//     a[i][j]=parseInt(v[j]);
//     }
//   }//console.log(a.length); // 3
  
//   let transpose = [];
// for(let i = 0; i<a[0].length; i++){
//   transpose[i] = [];
// }
// for(let i = 0; i<a.length; i++){
//   for(let j = 0; j<a[0].length; j++){
//     transpose[j][i] = a[i][j];
//   }
// }
// for(let i=0;i<transpose.length;i++){
// console.log(...transpose[i]);
// }

let n=parseInt(readLine())
let matrix=[]
let row=[]
for(let i=0;i<n;i++){
   row=readLine().split(" ").map(Number)
  matrix.push(row)
  }


for(let i=0;i<matrix[0].length;i++){
  for(let j=0;j<n;j++){
    process.stdout.write(matrix[j][i] + " ")
  }
  console.log()
} 