// let fs = require("fs");
// let data = fs.readFileSync("input.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }
// //aakaashh  ---  aksh

// let a = readLine().split("")
// let a="aaakkkssshh"
// let arr = []
// for (let i = 0; i < a.length; i++) {
//      count = 0  //filtering
//     for (let j = 0; j < arr.length; j++) { //
//         if (a[i] == arr[j]) {  //comparing to new array,  if not present ,then push in new array
//             count++
//         }
//     }
//     if (count == 0) {   
//         arr.push(a[i])
//     }
// } 
// for (let i = 0; i < arr.length; i++) {
//     process.stdout.write(arr[i])
// }
    
// for (let i = 1; i < a.length; i++) {
//     if(arr.includes(a[i])){   // USING INCLUDES FUNCTION
//         continue;
//     }
//     else{
//         arr.push(a[i])
//     }
// }

let a="aaakkkssshh"
let b= new Set(a)
for(x of b.values()){
    process.stdout.write(x + "")
}