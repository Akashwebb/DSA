let fs = require("fs");
let data = fs.readFileSync("predictSeat.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
for(let i=0;i<n;i++){
    let [c,b]=readLine().split(" ").map(Number);
    
    
    
    if(b>c){
        console.log("Invalid");
    }
    else{
        temp=b%8;
    if(temp ==1 || temp==4){
            console.log("L");
        }
    if(temp ==2|| temp==5){
            console.log("M");
    }
    if(temp ==3 || temp==6){
        console.log("U");
    }
    if(temp ==7 ){
        console.log("SL");
    }
    if(temp==0){
        console.log("SU");
    }
}

}