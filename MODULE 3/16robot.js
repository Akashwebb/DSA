let fs = require("fs");
let data = fs.readFileSync("16robot.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'RobotMovement' and method names as 'moveUp', 'moveDown', 'moveLeft' and 'moveRight' 
class RobotMovement{
	constructor(){
		this.xCoordinate=0
		this.yCoordinate=0
	}
	moveUp(){
		this.yCoordinate+=1
	}
	moveDown(){
		this.yCoordinate-=1
	}
	moveLeft(){
		this.xCoordinate-=1
	}
	moveRight(){
		this.xCoordinate+=1
	}
}
let Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index  < Num; index ++) {
  let currentMovement = readLine();
  if (currentMovement === "up") {
    myRobotMove.moveUp();
  } else if (currentMovement === "down") {
    myRobotMove.moveDown();
  } else if (currentMovement === "left") {
    myRobotMove.moveLeft();
  } else {
    myRobotMove.moveRight();
  }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);