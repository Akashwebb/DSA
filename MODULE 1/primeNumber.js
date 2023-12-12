let fs = require("fs");
let data = fs.readFileSync("primeNumber.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let ar=[];
let count=0;
for(let i=0;i<n;i++){
    ar[i]=parseInt(readLine());
    for(j=1;j<=ar[i];j++){
        if(ar[i]%j===0){
            count++;
        }
    }
    if(count===2){
        count=0;
        console.log("Yes");
        
    }else{
        count=0;
        console.log("No");
    }
}