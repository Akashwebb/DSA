let fs = require("fs");
let data = fs.readFileSync("increaseSubArr.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}