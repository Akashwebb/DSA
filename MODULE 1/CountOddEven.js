let fs = require("fs");
let data = fs.readFileSync("OddEven.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let num= parseInt(readLine());
count_even=0;
count_odd=0;
for (let i=0;i<num;i++){
    let n = parseInt(readLine());
    if(n%2===0){
        count_even++
    }else{
        count_odd++
    }
    
}
console.log(count_even, count_odd);