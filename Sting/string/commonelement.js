let arr1 = [1, 5, 10, 20, 40, 80,100];
let arr2 = [6, 7, 20, 80, 100];
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
let i = 0,
  j = 0,
  k = 0;
let result = [];
while (i < arr1.length && j < arr2.length && k < arr3.length) {
  if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
    result.push(arr1[i]);
    i++;
    j++;
    k++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else if (arr2[j] < arr3[k]) {
    j++;
  } else {
    k++;
  }
}

if (result.length == 0) {
  console.log(-1);
} else {
  console.log(result);
}