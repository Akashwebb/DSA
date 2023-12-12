let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let arr1 = "ABBACA"
let arr2 = "AABBAC"
let count=0
let ar=[]
let word = true
if(arr1.length != arr2.length){
    console.log(0)
}
else{
    for (let i = 0 ; i < arr1.length ; i++){
       for(let j = 0 ; j < arr2.length ; j++){
        if(arr1[i]==arr1[j]){     // counting A B C occurance in arr1
            count++
        }
    }
       for(let m = 0 ; m < arr2.length ; m++){
        if(arr1[i]==arr2[m]){      //  count A B C occurance in arr2
            count--
        }
       }
       if(count != 0){
          word=false
       }
    }
    if(word==true){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}