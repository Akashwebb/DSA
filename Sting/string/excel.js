let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function alphabet(n){
    return String.fromCharCode(90-n)
}
let value =parseInt(readLine())  //4
while(value--){
    let n=parseInt(readLine());  //1  26  27 100
    n-=1;
    let col="";
    while(n>=0){
        let mod=n%26;
        col+=alphabet(mod);
        n=parseInt(n/26);
        n-=1;
    }
    //console.log(col)
    console.log(col.split("").reverse().join(""));
}
