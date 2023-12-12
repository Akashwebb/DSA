let fs = require("fs");
let data = fs.readFileSync("recursionPalin.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function pad(arr){
    if(arr.length===1){
      return arr[0];
    }
    else{
      return arr.pop()+pad(arr);
    }
  }
  let n=parseInt(readLine());
  for(i=0;i<n;i++){
    let check=readLine();
    let arr=check;
    arr=arr.split("");
  let result=pad(arr);
  if(result===check){
   console.log("True");
  }
  if(result!==check){
    console.log("False");
  }}