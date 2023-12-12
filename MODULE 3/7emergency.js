let fs = require("fs");
let data = fs.readFileSync("7emergency.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function calculateTotalFund(salaries, peopleCount){
    
    let sum = 0;
    
    for (let i = 0; i < salaries.length; i++) {
        let x =0;
          x = Math.ceil ((salaries[i]*7)/100);
         sum=sum+x;
    }
    
    return sum;
}

function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each])
    }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
//let totalFund = 
console.log(calculateTotalFund(salaries, peopleCount));