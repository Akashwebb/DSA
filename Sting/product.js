// Given an array Arr[] that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray.
// N = 5
let a= [6, -3, -10, 0, 2]  // 180  .... 6*3*10=180
product=1
max=0
for(let i=0;i<a.length;i++){
    if(a[i]==0){
        product=1
    }
    else{ 
    product=product*a[i]
    if(product>max){
        max=product
    }
}
}
console.log(max)
