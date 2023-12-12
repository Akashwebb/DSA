let fs = require("fs");
const { resourceLimits } = require("worker_threads");
let data = fs.readFileSync("1aa.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let n =parseInt(readLine())
// let a=[]
// for(let i=0;i<n;i++){
//   a[i]=parseInt(readLine())
// }
// for(i=0;i<a.length;i++){
//   if(a[i]>a[i+1]){
//     temp=a[i]
//     a[i]=a[i+1]
//     a[i+1]=temp
//   }
// }
// console.log(a[0]*a[a.length-1])

let n=parseInt(readLine())
a=[]
final=[]
for(let i=0;i<n;i++){
   a[i]=parseInt(readLine())
}
for(let i=0;i<n;i++){
  p=parseInt(readLine());
  
    final.splice[p,n]
  }

console.log(final)
// let n=parseInt(readLine())
// let a =readLine().split(" ").map(Number)
// sum=0
// max=0

// for( let i=0;i<a.length;i++){
//      if(max<a[i]){
//       max=a[i]
//       console.log(max)
//      }
//      }
   
//     for(let i=0;i<a.length;i++){
//       sum=sum+(max-a[i])
//     }
    

// console.log(sum)