let fs = require("fs");
let data = fs.readFileSync("ranger.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
let numberOfTestcases = parseInt(readLine());
for (let i = 0; i < numberOfTestcases; i++) {
  let n = parseInt(readLine());
  let arr = readLine().split(" ");
  if (n == 1) {
    console.log(1);
  } else {
    // array that contains multiplication of elements from right side
    let rightArray = [];
    let num1 = 1;
    for (let i = n - 1; i >= 0; i--) {
      num1 = num1 * parseInt(arr[i]);
      rightArray.push(num1);
    }
    rightArray.reverse();
    // array that contains multiplication of elements from right side
    let leftArray = [];
    let num2 = 1;
    for (let i = 0; i < n; i++) {
      num2 = num2 * parseInt(arr[i]);
      leftArray.push(num2);
    }
    let j = 0;
    for (let i = 0; i < n; i++) {
      if (i == 0) {
        arr[j++] = rightArray[1];
      } else if (i == n - 1) {
        arr[j++] = leftArray[n - 2];
      } else {
        arr[j++] = rightArray[i + 1] * leftArray[i - 1];
      }
    }
    console.log(arr.join(" "));
  }
}