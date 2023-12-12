let a =[17,18,5,4,6,1]           // 18 6 6 6 1 -1
let arr=[];

arr.push(-1)
arr.unshift(a[a.length-1])
let max=a[a.length-1]
for(let i=a.length-2;i>0;i--){
   if(a[i]>max){
    max=a[i]
   } 
   arr.unshift(max)
   
}console.log(arr)