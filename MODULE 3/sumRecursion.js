let fs = require("fs");
let data = fs.readFileSync("sumRecursion.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let num = parseInt(readLine());
function f(n){
  if(n==0){
    return 
  } 
  else{
    f(n-1)
    console.log(n, n*(n+1)/2)
  }
}
f(num);