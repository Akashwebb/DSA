// let a=["akash" ,  "akappppp" , "akiiii", "akaoo"]
// let arr=[]

// for(let i=0;i<a.length;i++){
//     z=a[i].split("")
//     arr.push(z.length)
// }
// let index
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//         index=a[i]
//     }
// }
// console.log(index,max)

let a=["akash" ,  "akappppp" , "akiiii", "akaoo"]
max=0
index=""
for(let i=0;i<a.length;i++){
    z=a[i].split("")
    if(z.length > max){
        max=z.length;
        index=a[i]
    }
}
console.log(max,index)
