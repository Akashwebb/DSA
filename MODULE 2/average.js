let fs = require("fs");
let data = fs.readFileSync("average.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
sum=0;
let output = "Not Excellent!";
for (let i=0;i<n;i++){
    let nums=parseInt(readLine());
    sum= sum + nums;
    if(sum/n >100){
        output = "Excellent!";
    }

}console.log(output);