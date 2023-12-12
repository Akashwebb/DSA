let fs = require("fs");
let data = fs.readFileSync("mean.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine());
//console.log(n);
sum=0;
let mean=0;
let nums=readLine().split(" ");
//console.log(nums);
for(let i=0;i<n;i++){
    
    sum=sum+parseInt(nums[i]);
    //console.log(sum);
    mean=sum/n;
    
    

}console.log(parseInt(mean));