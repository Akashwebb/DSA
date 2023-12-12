let fs = require("fs");
let data = fs.readFileSync("office.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a=readLine().split(" ")

let n=readLine().split(" ").map(Number)
sum=0
let bb="boss"
let aa="Boss"
for(let i=0;i<a.length;i++){
    word=a[i]
    rate=n[i]
    
    
    if(word==bb || word==aa){
         sum=sum+rate*2 
    }else{ 
        sum=sum+rate
    } 
}
if((sum/a.length)<5){
    console.log("They fired me")
}else{
    console.log('I still have a job')
}
     