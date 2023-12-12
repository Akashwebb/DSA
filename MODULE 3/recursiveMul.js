let fs = require("fs");
let data = fs.readFileSync("recursiveMul.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function mul(n){   //12345
  if(n<0){
    return 1;
 }
  if(n===0){
     return 0;
  }
  else{
        num=n%10;
        result=result*num;
        n=Math.floor(n/10);
    mul(n);
  }
  return result;
}
let testcase=parseInt(readLine());
if(testcase===0){
  console.log(0);
}
for(i=0;i<testcase;i++){
  let n=parseInt(readLine());
  var num=0;
  var result=1;
  let answer=mul(n);
  console.log(answer);
}