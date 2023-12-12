// Input:
// N = 7
// arr[] = {8,-8,9,-9,10,-11,12}
// Output:
// 22
// Explanation:
// Starting from the last element
// of the array, i.e, 12, and 
// moving in a circular fashion, we 
// have max subarray as 12, 8, -8, 9, 
// -9, 10, which gives maximum sum 
// as 22.
let arr= [8,-8,9,-9,10,-11,12]
sum=0;
max=0;
for(let i=0;i<arr.length;i++){
    let last=arr.length-1;
    temp=arr[i];
    arr[i]=last
    last=arr[i];
    sum=sum+arr[i];
    if(sum>max){
        max=sum;
    }
    sum=0
}
console.log(max)