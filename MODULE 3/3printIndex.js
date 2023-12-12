let fs = require("fs");
let data = fs.readFileSync("printIndex.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function printer(x){

    
    for(let i=0;i<stringList.length;i++){
        printWithIndex(i,stringList[i]);
    }
}

function printWithIndex(index,string){
    console.log(index, string);
}

 let noOfStrings =parseInt(readLine());
 let stringList=[];
 for(let i = 0; i<noOfStrings; i++){
     stringList.push(readLine());
 } 
 printer(stringList);
 console.log(person.name);