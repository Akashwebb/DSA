let fs = require("fs");
let data = fs.readFileSync("5minMax.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

function maximumValue(inputNumbers) {

    let m2 = inputNumbers[0];
    for (let i = 0; i < inputNumbers.length; i++) {
        if (inputNumbers[i] > m2) {
            m2 = inputNumbers[i];
        }
    } return m2;
}

function minimumValue(inputNumbers) {

    let min = inputNumbers[0];
    for (let i = 0; i < inputNumbers.length; i++) {
        if (inputNumbers[i] < min) {
            min = inputNumbers[i];
        }
    } return min;
}


function getNumbersInRange(inputNumbers, m1, m2) {
    let d = [];
    if (m1 <= m2) {
        for (let i = 0; i < inputNumbers.length; i++) {
            if (inputNumbers[i] >= m1 && inputNumbers[i] <= m2) {
                d.push(inputNumbers[i]);
            }
        }
    }
    else if(m1 > m2) {
        for (let i = 0; i < inputNumbers.length; i++) {
            if (inputNumbers[i] >= m2 && inputNumbers[i] <= m1) {
                d.push(inputNumbers[i]);
            }
        }
    }
    if(d.length==0){
        return [-1];
 }
    return d;
    }

function ConvertToNumber(list) {
    for (let each in list) {
        list[each] = Number(list[each]);
    }
    return list;
}
let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ");
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange);