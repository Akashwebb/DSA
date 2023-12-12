let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine())
for (let i = 0  ; i < n ; i++){
let num = parseInt(readLine())
let word = readLine()
let count=0
let sum=0
let ar=[]
for(let i = 0 ; i < num ; i++){
    if(word[i]=="U"){
        count++
        ar.push(count)
    } 
    else{
        count--
        ar.push(count)
    }
}

for (let i = 0 ; i < ar.length ; i++){
    if(ar[i]==0){
        if(ar[i-1] < 0){
            sum++
        }
    }
}
console.log(sum)
}

// function valley(str){
//     let sealevel =0;
//     let ans=[];
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='U'){
//             ans.push(sealevel++);
//         }
//         else{
//             ans.push(sealevel--);
//         }
//         console.log(sealevel);
        
//     }
//     for(let i=0;i<ans.length;i++){
//         if(ans[i]==0 && ans[i+1]==-1){
//            count++;
//         }
//     }
//     console.log(count);
// }

// let n= parseInt(readLine());//1
// for(let i=0;i<n;i++){
//     let len = parseInt(readLine());//8
//     let str = readLine();//ud
//     let result = valley(str);
// }