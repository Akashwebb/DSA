const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync('aa.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());  //6
let a = [];
let final = [];
//let flag = true;
for (let i=0;i<n;i++){      //N
    a[i]= parseInt(readLine());
       
    }
    a.sort();
    for(let i =0;i<n-1;i++){   //N           
        if(a[i] != a[i+1] ) {
            final.push( a[i]);
        }
    // if( final.includes(a[i])== false){              //O(n^2) 
    //     final.push(a[i]);

       // }
}console.log(final);





//1+2+3+4......+n    n*(N+1)/2  = n^2
// let j
// for(let i=0;i<n;i=j){
//     for( j=0;j<n;j++){    
//        if(a[i]!=a[j])
//        break;
//     }
//     m =j-i;
//     if(m>1){
//         conti
//     }                        //  2 2 3 4 5 5 5 
// }                            //  i   j