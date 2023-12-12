let fs = require("fs");
let data = fs.readFileSync("factorial.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function factorial(n){
    if(n<0){
        return undefined;
    }
   else{ 
    if(n===0){
       return 1;
       }
       else{
       return n*factorial(n-1);
       }
      }
    }
    let n=parseInt(readLine());
    let res=factorial(n);
    console.log(res);