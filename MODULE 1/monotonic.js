let fs = require("fs");
let data = fs.readFileSync("monotonic.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n=parseInt(readLine());
let a =[];
for(let i=0;i<n;i++){
    a.push(parseInt(readLine()));
}
if(n==0 ||n==1){
	console.log(1);
}
let inc = true;
let dec = true;
for(let i=0;i<a.length-1;i++){
    if(a[i]<=a[i+1]){
        inc = true;
    }else{
        inc= false;
		break;
    }
}
for(let i=0;i<a.length-1;i++){
    if(a[i]>=a[i+1]){
        dec = true;
    }else{
        dec= false;
		break;
    }
}

if(inc ==false && dec == false){
   console.log(0);
}else{
    console.log(1);
}