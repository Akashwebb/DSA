let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync("image.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// let n = parseInt(readLine());  //10
// let pixel = [];
// for(i=0;i<n;i++){
//     pixel.push(parseInt(readLine()));
// }
// let m = parseInt(readLine());   //2 //8 9
// let Ipixel = [];
// for(i=0;i<m;i++){
//     Ipixel.push(parseInt(readLine()));
// }
// let count = 0;
// for(i=0;i<n;i++){
//     if(pixel[i] == Ipixel[0]){
//         if(pixel[i + (Ipixel.length-1)] == Ipixel[Ipixel.length-1]){
//             count++;
//         }
//     }
// }
// console.log(count); //2

let n = parseInt(readLine());
let a = [];
count = 0;
for (let i = 0; i < n; i++) {        //n
    a.push(parseInt(readLine()));
}
let m = parseInt(readLine()); //2
let a2 = [];
for (let i = 0; i < m; i++) {    // m
    a2.push(parseInt(readLine()));
}
for (let i = 0; i < n; i++) {     // n
    flag =true;
    for (let j = 0; j < m; j++) {    //m    O(n*m)   // n=m // O(n^2)
        if (a[i+j] != a2[j] ) {              //2n
            flag = false;
            break;
            
            }
    } if(flag== true){
        count++;
    }
} console.log(count);