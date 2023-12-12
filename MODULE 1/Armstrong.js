let fs = require("fs");
let data = fs.readFileSync("Armstrong.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//console.log("test");
let n = parseInt(readLine());
let temp=n;
sum=0;

let x=0;
let a=0;
while(n>0)
{
 x= n%10;
sum = sum+x**3;
n=parseInt(n/10);

}
if(temp==sum){
    console.log("Yes");
}
else{
    console.log("No");
}