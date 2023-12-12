// let fs = require("fs");
// let data = fs.readFileSync("input.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }
// let a =readLine().split("") 

let a="abbaac"
let arr=[]
for(let i=0;i<a.length;i++){
    count=0
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j])
        count++
    }
   
     let num=0  //filtering
    for(let k=0;k<arr.length;k++){
        
        if(a[i]==arr[k])
        num++
    }
    if(num==0){
        console.log(a[i],count)
        arr.push(a[i])
    }
}

