let fs = require("fs");
let data = fs.readFileSync("aa2.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let even = [];
let odd = [];
let res = [];
for(let i=0;i<n;i++){
    let arr = readLine().split(" ").map(Number);
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    for(let i=0;i<even.length;i++){
        for(let j=i+1;j<even.length;j++){
            if(even[i]<even[j]){
            let temp = even[i];
            even[i]= even[j];
            even[j]=temp;
           }
        }
    }//console.log(even)
    for(let i=0;i<odd.length;i++){
        for(let j=i+1;j<odd.length;j++){
            if(odd[i]>odd[j]){
            let temp = odd[i];
            even[i]= even[j];
            even[j]=temp;
            }
        }
    }//console.log(odd);

}res = res(even , odd)
console.log(res)
