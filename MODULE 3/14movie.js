let fs = require("fs");
let data = fs.readFileSync("14movie.txt", "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie{
  constructor(a,b,c){
    this.lengthInMinutes = a
    this.numCharacters = b ;
    this.languag = c
  
    
  }
  run(){
    return "This is a "+this.languag+" movie with "+this.numCharacters+" characters and is "+this.lengthInMinutes+" minutes long."
  }
}

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());