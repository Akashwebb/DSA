let fs = require("fs");
let data = fs.readFileSync("9perimeter.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define the required class here...
class Rectangle{
    constructor(a,b){
        this.length=a;
        this.width=b;
    }
    calculatePerimeter(){
        return (this.length+ this.width)*2
    }
}

let input=readLine().split(" ").map(Number);
let length = parseInt(input[0]);
let width = parseInt(input[1]); 
let rectangle =new Rectangle(length, width); //new create empty object
console.log(rectangle.calculatePerimeter()); // because rectangle object call function () , so 
console.log(rectangle.length)               // calculatePerimeter have a return type...
//console.log(Rectangle.width)