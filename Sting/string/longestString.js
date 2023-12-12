let fs = require("fs");
let data = fs.readFileSync("longestString.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//let a="helloooooo world"
let a=readLine().split(" ")
arr=[]

for(let i=0;i<a.length;i++){
    z=a[i]
    arr.push(z.length)
}

let max=arr[0]
for(let i=0;i<arr.length;i++){
    if(max<=arr[i]){
        max=arr[i]
    }
}
console.log(max)
