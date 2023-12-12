let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let num = parseInt(readLine());
let ones =0;
let twos=0;
let threes=0;
for(let i=0;i<num;i++){
    let sel = parseInt(readLine());
    if(sel===1){
        ones++;
    }
    else if(sel===2){
        twos++;
    }
    else if(sel===3){
        threes++;
    }
    else if(sel===0){
        break;
    }
    else{
        console.log(sel , "not valid");
        break;
    }

    }console.log(ones);
    console.log(twos);
    console.log(threes);


