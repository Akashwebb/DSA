let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let num = parseInt(readLine());
let firstNum = parseInt(readLine());
let temp = firstNum;
//count=1;
let flag = "not present";
for(let i=0;i<num;i++){
    let otherNum = parseInt(readLine());
    if(temp=== otherNum){
        flag="present";
        break;
    }
    
}console.log(flag);