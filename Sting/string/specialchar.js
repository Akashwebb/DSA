// let fs = require("fs");
// let data = fs.readFileSync("input.txt", 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }
// ascii - 48 to 57  =  0 to 9
// ascii - 65 to 90  =  A to Z
// ascii - 97 t0 122 =  a to z

// let aa="b"
// console.log(aa.charCodeAt())          //  GIVES ASCII VALUE
// console.log(String.fromCharCode(99))  // GIVES CHARACTER 

// REMOVE SPECIAL CHARACTERS
let a= "ak#as$h&"   //---  akash
let res=""
for(let i=0;i<a.length;i++){
    if(a[i].charCodeAt()>64 && a[i].charCodeAt()<=122){ 
    res=res+a[i];
    }
   
} console.log(res)

 
// g is global flag to match all occurance of regex in string and not just first occurance
//^ means not  --  ^ is first in square bracket means "not the following character"
// let a=readLine();
// console.log(a.replace(/[^a-zA-Z0-9]/g,""))  ; 
