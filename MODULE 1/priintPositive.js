let fs = require("fs");
let data = fs.readFileSync("printPositive.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let firstRange = parseInt(readLine()); //-5
let secRange = parseInt(readLine());  //4
let non_neg= -1;

for(let i = firstRange; i<=secRange;i++){
    if(i >= 0 ){
        console.log(parseInt(i));
    }
  
    
}
if(firstRange <0 && secRange<0){
    console.log(non_neg);

}