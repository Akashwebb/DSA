let fs = require("fs");
let data = fs.readFileSync("palindrome.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input=readLine().toLowerCase()
let a=input.split("")
let flag="YES"
for(let i=0;i<parseInt(a.length)/2;i++){
    if(a[i]!=a[a.length-1-i]){
        flag="NO"
        break;
    }
}console.log(flag)