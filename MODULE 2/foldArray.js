let fs = require("fs");
let data = fs.readFileSync("foldArray.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n= parseInt(readLine());
let a =[];
for(let i=0;i<n;i++){
    a[i]=parseInt(readLine());    
}
let fold = parseInt(readLine()); 
for(let f =0;f<fold;f++){  
  let k =[];
for(let i=0,j=a.length-1;i<j;i++,j--){ 
  
  k.push(a[i]+a[j]);
  }
   if(a.length%2==1){
      k.push(a[parseInt(a.length/2)]);
   }
   a=k;
   
  }
  console.log(a.length);
  for(let i =0;i<a.length;i++){
    console.log(a[i]);
  }
 
            



