let fs = require("fs");
let data = fs.readFileSync("countFirst.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let num = parseInt(readLine());
let firstNum = parseInt(readLine());
let temp = firstNum;
count=1;
for(let i=0;i<num-1;i++){
    let otherNum = parseInt(readLine());
    console.log(otherNum);
    if(temp=== otherNum){
        count++;
    }
}console.log(count);