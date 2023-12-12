let fs = require("fs");
let data = fs.readFileSync("arrayReverse.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n=parseInt(readLine());
let a =[];
for(let i=0;i<n;i++){
    a[i]=parseInt(readLine());
}console.log(a);
rev =[];
for(let i=n-1;i>=0;i--){       //using push
    rev.push(a[i]);
}console.log(rev);
for(let i=n-1,j=0;i>=0;i--,j++){  //without 
    rev[j]= a[i];
}console.log(rev);
// for(i=0;i<n;i++){      //without using another array
//     rev[i].unshift(parseInt(readLine()));
// }console.log(rev);