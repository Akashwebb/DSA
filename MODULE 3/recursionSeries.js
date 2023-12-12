let fs = require("fs");
let data = fs.readFileSync("recursionSeries.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function rec(n){
    if(n<=9){
        return n;
    }
    else{
        if(n%2===0){
            return rec(n-10);
        }
        else{
            return rec(n-9);
        }
    }
    }
    let n=parseInt(readLine());
    for(i=0;i<n;i++){
        let value=parseInt(readLine());
        let res=rec(value);
        console.log(res);
    }
