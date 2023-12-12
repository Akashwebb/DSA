let fs = require("fs");
let data = fs.readFileSync("multiple.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let x = parseInt(readLine());

while(1<=x<=10^9){
for (let i=x+1;i<=2*x;i++){
    if(i%x==0 && i%2 ==0){
        console.log(i);
        break;
    }
}
break;
}