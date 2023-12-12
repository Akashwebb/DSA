let fs = require("fs");
let data = fs.readFileSync("sumQuery.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let n = readLine().split(" ").map(Number);
let a = readLine().split(" ").map(Number);

for (let i = 0; i < n[1]; i++) {
    let q = readLine().split(" ").map(Number);
    sum = 0;
    for (let j = q[0]; j <= q[1]; j++) {
        sum = sum + a[j];
    } console.log(sum);
}