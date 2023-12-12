//Given an unsorted array A of size N that contains only non-negative integers,
// find a continuous sub-array which adds to a given number S.
//In case of multiple subarrays, return the subarray which comes first on moving from left to right.
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4

let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine())
let key = parseInt(readLine())
let a = readLine().split(" ")
sum = 0
num = 0;
for (let i = 0; i < n; i++) {
    a[i] = parseInt(a[i])
}
console.log(a)
for (let i = 0; i < n; i++) {
    sum = 0
    for (let j = i; j < n; j++) {
        sum = sum + a[j]
        if (sum == key) {
            console.log(i + 1, j + 1)
            num++;
            break;
        }
    }
    if (num > 0) {
        break;
    }
}

