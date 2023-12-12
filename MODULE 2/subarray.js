let fs = require("fs");
let data = fs.readFileSync("subarray.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let a = readLine().split(" ").map(Number);
let count=1;

let sub = [];
let final = [];
let max =0;
for(let i=0;i<n;i++){        //2 7 6 11 20
    
    if(a[i]<a[i+1]){
        count++
       sub.push(i)
       //console.log(sub)
       //console.log(count)
       if(a[i+1]==n-1){
        sub.push(a[i+1])
       }
    }else{
        //console.log("j")
        if(max<count){
            final=sub;
            max=count;
        }
        sub = []
        count = 1;
    }
    }console.log(final)
    console.log(final.length,final[0],(final[final.length-1]+1));