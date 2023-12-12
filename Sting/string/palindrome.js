// let fs = require("fs");
// let data = fs.readFileSync("input.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }
// let a=readLine().split("")

// console.log(a)
// let b=[]
// for(let i=a.length-1;i>=0;i--){    // reversing a string and storing in "b"
//     b.push(a[i])
// }
// console.log(b)
// x=a.join('');      // join()  is use to join split("") variables
// y=b.join('');
// console.log(x)
// console.log(y)
// if(x==y){
//     console.log("palindrome")
// }
// else{
//     console.log("no")
// }

let a="aabbaa"
len=a.length
flag=true
for(let i=0;i<parseInt(len / 2);i++){
      if(a[i]!=a[a.length-1-i]){
        flag=false
        break;
      }
}
console.log(flag)
 

