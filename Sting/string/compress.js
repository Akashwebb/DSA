let fs = require("fs");
const { stdout } = require("process");
let data = fs.readFileSync("compress.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine())
count=1

for(let k=0;k<n;k++){
    a=readLine().split("")
   
    for(let i=0;i<a.length;i++){
        
       if(a[i]==a[i+1]) {
        count++
       }
       else{
        if(count==1){
           process.stdout.write(a[i])
        }
        else{
            process.stdout.write(a[i])
            process.stdout.write(count.toString())
         }
        count=1
       }
    }
    console.log()
}