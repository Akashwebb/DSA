let fs = require("fs");
let data = fs.readFileSync("recBinomial.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function hack(startingAmount, finalAmount){
    if(startingAmount === finalAmount) return true;
    if(startingAmount > finalAmount) return false;
    return (hack(startingAmount*10, finalAmount) || hack(startingAmount*20, finalAmount));
}
let testCases = parseInt(readLine());
for(let t = 1; t <= testCases; t++){
    let money = parseInt(readLine());
    if(hack(1, money)) console.log("Yes");
    else console.log("No");
}