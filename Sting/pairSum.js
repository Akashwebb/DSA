//Given two unsorted arrays A of size N and B of size M of distinct elements, 
//the task is to find all pairs from both arrays whose sum is equal to X.
// Input:
// A[] = {1, 2, 4, 5, 7}
// B[] = {5, 6, 3, 4, 8} 
// X = 9 
// Output: 
// 1 8
// 4 5 
// 5 4
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a=readLine().split(" ").map(Number) //1, 2, 4, 5, 7
let b=readLine().split(" ").map(Number)  //5, 6, 3, 4, 8

key=parseInt(readLine())

for(let i=0;i<a.length;i++){
   
    for(let j=0;j<b.length;j++){
        
        if((a[i]+b[j])==key){
            console.log(a[i],b[j])
           }
    }
}