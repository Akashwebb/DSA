let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let n=parseInt(readLine())
// let arr=readLine()
let arr="aaaamcemcmiiokcjjfu"
let vowel="aeiou"
count=0
for(let i=0;i<vowel.length;i++){
    for(let j=0;j<arr.length;j++){
        if(vowel[i]==arr[j]){
            count++
            break;
        }
    }
}

if(count==5){
    console.log(`YES`)
}else{
    console.log(`NO`)
}




