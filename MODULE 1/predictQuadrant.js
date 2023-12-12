let fs = require("fs");
let data = fs.readFileSync("predictQuadrant.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let totalQua =parseInt(readLine());
for(let i=0;i<totalQua;i++){
    let point=readLine().split(" ");
    console.log(point);
    let x =parseInt(point[0]);
    let y =parseInt(point[1]);
    //console.log(x,y);

    if(x>0 && y>0){
        console.log("Q1");
    }
    else if(x<0 && y>0){
        console.log("Q2");
    }
    else if(x<0 && y<0){
        console.log("Q3");
    }
     else{
         console.log("Q4");
     }
  } 