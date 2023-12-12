let fs = require("fs");
let data = fs.readFileSync("1func.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function signum(number){
    let name = "aa";
    
    }
    if(number>0){
        return 1;
    }
    else if(number ==0){
        return 0;
    }
    else{
        return -1;
    }
    }
let number  = parseFloat(readLine());
console.log(signum(number));
console.log(signum.name);


