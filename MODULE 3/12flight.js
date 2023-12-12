let fs = require("fs");
let data = fs.readFileSync("12flight.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.uTime=upTime;
		this.ownTime=downTime;
	}
	calculateFlight(){
		let x=this.uTime.split(':');
		
		for(let i=0;i<x.length;i++){
			x[i]=parseInt(x[i]);
		}
        let y=this.ownTime.split(':');
		for(let i=0;i<y.length;i++){
			y[i]=parseInt(y[i]);
		}
        return (60*(y[0]-x[0])+(y[1]-x[1]))
	}
		
	}


// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());