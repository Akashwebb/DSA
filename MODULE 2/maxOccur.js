let fs = require("fs");
let data = fs.readFileSync("maxOccur.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let a = [];

for (let i = 0; i < n; i++) {
  a.push(parseInt(readLine()));
}
let result = [];
let max = 0;
let count = 1;
for (let i = 0; i < n; i++) {  // 1 2 2 3 3 3 
  if (a[i] == a[i + 1]) {
    count++   //2             
    } 
    else {
      if (max < count) {                   //  i    min      count     result   
        max = count;                       //  0      1        1         [1] 
        result = [];                       //  1      1        2
        result.push(a[i]);                //   2      2        2       [2]
      } 
      else if (max == count) {
        result.push(a[i])
      }
    count = 1;
  }
}                                  
      
if(a.length==0){
  console.log(-1);
}else{
  for(let i=0;i<result.length;i++){
    console.log(result[i]);
  }
}

