let fs = require("fs");
let data = fs.readFileSync("diagonalMatrix.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// Write a function which takes a 2 dimentional array of size nxn where n > 0 and changes its diagonal according to the following conditions
// 1. if an element e < 0 replace it with 0
// 2. If element e >= 0 replace it with 1
// Input
// The first line contains n, denoting the number of lists.
// This is followed by n lines. Each line contains n integers separated by a space
// Output
// n lines, each line representing a list of numbers separated by a space.
// 2 0 1 4
// 0 -1 1 10
// 0 0 0 0
// 1 2 3 4

// 1 0 1 4
// 0 0 11 0
// 0 0 1 0
// 1 2 3 1

// let n =parseInt(readLine());           
// for(let i=0;i<n;i++){
// let a =readLine().split(" ").map(Number);  //printing one line at a time ,only [2 0 1 4]  and check for a[0]
                         
// //print next line [0 -1 1 10] and check for a[1] as i++ increments
//  if(a[i]>=0){    // checking for 1d array ,  a[0], then a[1]; then a[2] 
//    a[i]=1
//  }else{
//    a[i]=0;
//  }
   
// console.log(...a)
// }
//left diagonal - [0,0] [1,1]....
//right diagonal - [0,3] [2,1] [1,2]... i.e i+j = 3 always   i.e  n-1 == i+j i.e  (j= n-1-i)
let n = parseInt(readLine());
let a =[];
for(let i=0;i<n;i++){
  let val = readLine().split(" ");
  a[i]=[];
  for(let j=0;j<n;j++){
    a[i][j]=parseInt(val[j]);
  }
}console.log(...a);
for(let i=0;i<n;i++){         //change in left diagonal
  if(a[i][i]>=0){
    a[i][i]=1;
  }else{
    a[i][i]=0;
  }
}//console.log(...a);
for(let i=0;i<n;i++){          //change in right diagonal
  if(a[i][n-1-i]>0){
    a[i][n-1-i]=11;
  }else{
    a[i][n-1-i]=22;
  }
}
for(let i =0;i<a.length;i++){
console.log(...a[i]);
}