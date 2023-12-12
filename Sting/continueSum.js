let a=[2,3,4, 7, 6,7,1,2,3]
sum=0

max=0
for(let i=0;i<a.length;i++){    //2 3 4 7 6 7 1 2 3
   if(a[i]+1 == a[i+1]){
     sum=sum+a[i]
     }
   else{
    sum=sum+a[i]
    if(sum>max){
        max=sum
    }
    sum=0
   }
}
console.log(max)
