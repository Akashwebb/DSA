// input:
// [3, 4, 1, 5, 2, 6]
// output:
// 3
// Explanation:
// The left and right sub array for index '3' is [3, 4, 1] and [2, 6] respectively and the sum of both the subarray is 8.
// In the above example '3' is the equillibrium index = 4.
let a=[-2,3,-4,2,6,6,-15]
let sum1=0;
let sum2=0;
for(let i=0;i<a.length;i++){
    sum1=0
    for(let j=0;j<i;j++){
        sum1=sum1+a[j]
    }
    sum2=0
    for(let k=i+1;k<a.length;k++){
        sum2=sum2+a[k]
    }
    if(sum1==sum2){
        console.log(i)
    }
}



          
         
