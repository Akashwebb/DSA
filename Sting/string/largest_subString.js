// let a=["akash" ,  "akappppp" , "akaiiii", "akaoo"]   // aka
// let word=a[0].split("")
// let arr=[]
// count=0
// num=0
// for(let i=1;i<a.length;i++){
//     z=a[i].split("")
//     arr.push(z)
// }
// console.log(arr)
// for(let i=0;i<word.length;i++){   //akash
//     for(let j=0;j<arr.length;j++){
//         if(word[i]==arr[j][i]){
//             count++
//         }
//         else{
//             num++
//             break;
//         }
//     }if(num>0){
//         break;
//     }
// }
// let index= parseInt(count/arr.length); 
// let x=0      
// while(x<index){
//     process.stdout.write(word[x])
//     x++
// }

let a=["akshak" ,  "akappppp" , "akaiiii", "akaaaoo"] 
let word=a[0].split("")
let arr=[];
num=0;
count=0;
for(let i=1;i<a.length;i++){
    z=a[i].split("")
    arr.push(z)
}
console.log(arr)
for(let i=0;i<word.length;i++){
    for(let j=0;j<arr.length;j++){
        if(word[i]==arr[j][i]){
            count++;
        }
    }
}console.log(count)
let index=parseInt(count/arr.length)
let x=0;
while(x<index){
    process.stdout.write(word[x])
    x++;
}
 

