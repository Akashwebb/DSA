let fs = require("fs");
let data = fs.readFileSync("pattern.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let n = parseInt(readLine());
for(let i=1;i<=n;i++){
    for(let j=n;j>=i;j--){
        process.stdout.write(i.toString() );

    }console.log();
}