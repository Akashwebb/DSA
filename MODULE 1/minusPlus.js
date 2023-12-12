let fs = require("fs");
let data = fs.readFileSync("minusPlus.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let size = parseInt(readLine());
let add=0;
for(let i=0;i<size;i++){
    let num = parseInt(readLine());
    if(i%2==0){
        add=add+num;
    }
    else{
        add=add-num;
    }

}console.log(add);
