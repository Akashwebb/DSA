let fs = require("fs");
let data = fs.readFileSync("largestAtRight.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
function replaceElements(arr){
  // Implement this function
  let newa=[];
for(i=0;i<arr.length;i++){              //17  18  5  4  6  1
  for(j=arr.length-1;j>=i;j--){       
      if(arr[i+1]<=arr[j]){           
      newa.push(arr[j]);
      
      break;
  }
}
}newa.push(-1);
return newa;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
      arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
console.log(elem);
}