// let fs = require("fs");
// let data = fs.readFileSync("PRACTICE.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }
// let a =[];
// while(true){
//   let x =parseInt(readLine());
//   if(x>=0){
//     a.push(x);
//   }else{
//     break;
//   }
// }console.log(a);
let a = [1,2,3,4,5];
for(let i=0;i<5;i++){
    let temp = a[i];
    a[i] = a[5-1-i];
    a[5-1-i] = temp;
}
console.log(a);

