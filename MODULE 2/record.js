let fs = require("fs");
let data = fs.readFileSync("record.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
let x=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
let max= arr[0];
let min = arr[0];
mincount=0;
maxcount=0;
for(let i=1;i<x;i++){
    if(arr[i]>max){
        maxcount++
        max=arr[i];
    }else if(arr[i]<min){
        mincount++
        min=arr[i];
    }
}
    
    console.log(maxcount,mincount);
    