let fs = require("fs");
let data = fs.readFileSync("recBinomial.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function binomialCoefficient(n){
    if(n===0){
      return 1;
    }
    else{
      return n*binomialCoefficient(n-1);
    }
  }
  let testcase=parseInt(readLine());
  for(i=0;i<testcase;i++){
   let  value=readLine().split(" ");
   var value1=parseInt(value[0]);
   var value2=parseInt(value[1]);
  let n=binomialCoefficient(value1);
  let r=binomialCoefficient(value2);
  let subtract=binomialCoefficient(value1-value2);
  let res=n/(r*subtract);
  console.log(res);
  }