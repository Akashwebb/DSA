let fs = require("fs");
let data = fs.readFileSync("maxProduct.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let num = [];
max=Number.NEGATIVE_INFINITY;
for(let i =0;i<n;i++){
     num[i] = parseInt(readLine());
}

for(let i=0;i<n;i++){
    {
        
        let prod = num[i]*num[i+1];
        if(prod> max ){
             max = prod;
        }else{
            max = max;
        }
    }
}console.log(max);