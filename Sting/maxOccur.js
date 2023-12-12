const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine())
let a = []
let countt=1
let max=0
let arr=[]
for(let i=0;i<n;i++){
    a[i]=parseInt(readLine())
}
console.log(a)
for(let i=0;i<n;i++){
    if(a[i]==a[i+1]){
        countt++  //1
    }
    else {
        if(countt==1){
            continue;
        }
        if(max<countt){
        max=countt
        arr=[]
        arr.push(a[i]) //1
        countt=1
       }
       else if(max==countt){
        
            arr.push(a[i])
            countt=1
        }
            }
       }
       
    if(arr.length==0){
        console.log(-1)
    }else{
        console.log(arr)
    }




