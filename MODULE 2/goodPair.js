let fs = require("fs");
let data = fs.readFileSync("goodPair.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let arr = readLine().split(" ");
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
}
console.log(count);

