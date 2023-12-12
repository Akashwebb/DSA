let fs = require("fs");
let data = fs.readFileSync("luckyNum.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine()); 
let a = [];
for(let i=0;i<n;i++){
	a.push(parseInt(readLine()));
}
let flag = -1;
let j;
for(let i =0;i<n;i=j){            //6
	for( j=i+1;j<n;j++){          // 1 2 2 3 3 3
		if(a[i] !== a[j])         // o/p 
		break;
	}
	if((j-i)=== a[i]){
		flag=a[i];
		break;
	}
} console.log(flag);

// 6
// 1 2 2 3 3 3
// 1