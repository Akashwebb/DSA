let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let r1= parseInt(readLine());
add=0;
for(let i=0;i<r1;i++){
    let r2=parseInt(readLine());
    if(i%2===0){
        add=add+r2;
    }
    else{
        add=add-r2;
    }
}console.log(add);