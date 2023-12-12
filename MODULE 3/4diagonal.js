let fs = require("fs");
let data = fs.readFileSync('4diagonal.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//name your function as rightToLeftDiagonal

function rightToLeftDiagonal(x) {  //   using only i
  let a = []
  for (let i = 0; i < m;i++) {
     a.push(matrix[i][m-i-1]);
  }
      return a;
   
}
// function rightToLeftDiagonal(x) {    //using i and j
//   let a = []
//   for (let i = 0,j=m-1; i < m,j>=0 ; i++,j--) {
//      a.push(matrix[i][j]);
//   }
//       return a;
   
// }

let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}

let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}