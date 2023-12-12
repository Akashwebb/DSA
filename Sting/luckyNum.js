// 4 2 2 3 4
// Output:
// 2
// Explanation
// First line is 4, i.e. 4 elements in the array. The array is [2,2,3,4]. 
// We can see that number 2 is repeating 2 times hence it is the lucky number which is our output

let a=[2,2,3,4]

max=0
for(let i=0;i<a.length;i++){
    count=1
    if(a[i]==a[i+1]){
        count++
        console.log(a[i],count)
    }
     if(count==a[i]){
            console.log("hi",a[i],count)
          }
    }

    