let fs = require("fs");
let data = fs.readFileSync("OddEven.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let age = parseInt(readLine());
    if (age > 18) {
        console.log(age, "can vote");
    }
    else {
        console.log(age, "cant vote");
    }

}


