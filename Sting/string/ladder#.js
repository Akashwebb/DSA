let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//let n=parseInt(readLine())
let n=6
let m=1
for(let i=n-1;i>=0;i--){
    for(let j=i;j>0;j--){
        process.stdout.write(" ")
    }
    for(let k=0;k<m;k++){
        process.stdout.write("#")
    }
    m=m+1
    console.log()
}