let fs = require("fs");
let data = fs.readFileSync('kangaroo.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let t = parseInt(readLine());
for(let i=0;i<t;i++){
   let a = readLine().split(" ");
  let x1=parseInt(a[0]);    //0
  let v1=parseInt(a[1]);    //3
  let x2=parseInt(a[2]);    //4
  let v2=parseInt(a[3]);    //2       x1+n*v1 == x2+n*v2  ,  n(v1-v2) = (x2-x1)
if(v2>=v1){
  console.log("NO");
}
  else if((x2-x1) % (v1-v2) ===0){
    console.log("YES");
  }
  else{
    console.log("NO");
  }
  
}