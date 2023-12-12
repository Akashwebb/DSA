let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// i.love.to.do.coding  --- coding.do.to.love.i

a=readLine().split(".")
for(let i=a.length-1;i>=0;i--){
    if(i>=1){
    process.stdout.write(a[i] +".")
    }
    else{
        process.stdout.write(a[i])
    }
}