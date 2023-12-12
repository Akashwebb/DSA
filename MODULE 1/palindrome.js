let fs = require("fs");
let data = fs.readFileSync('palindrom.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n=parseInt(readLine());
let temp=n;
let rem =0;
let num=0;
while(temp!=0){
    rem=temp%10;
    num=num*10+rem;
    temp=parseInt(temp/10);

}console.log(num);
if(num==n){
    console.log("True");
}else{
    console.log("False");
}