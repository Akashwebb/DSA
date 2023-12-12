let fs = require("fs");
let data = fs.readFileSync("findInSeries.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let a = 0;
ar = [];
let n = parseInt(readLine());        //1 , 3 , 6 , 10 , 15 , 21 ,....
for (i = 1; i <= n; i++) {
  a = a + i;   // this will  give u series of 1,3,6,10...
  ar[i] = a;
  
} console.log(ar[n]);  // nth term in series
