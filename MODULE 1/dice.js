let fs = require("fs");
let data = fs.readFileSync("dice.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine());
if(n==6){
    console.log(1);
}
if(n==2){
    console.log(5);
}
if(n==3){
    console.log(4);
}
if(n==1){
    console.log(6);
}
if(n==5){
    console.log(2);
}
if(n==4){
    console.log(3);
}