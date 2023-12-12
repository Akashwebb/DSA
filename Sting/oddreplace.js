let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//  akashwww  ---  a#a#h#w#
// replace with "#" at every odd place of string

let a =readLine().split("")
for(let i=0;i<a.length;i++){
    if(i%2==1){
        a[i]="#"
    }
}
for(let i=0;i<a.length;i++){
    process.stdout.write(a[i])
}