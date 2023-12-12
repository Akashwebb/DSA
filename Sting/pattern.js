// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
// for(let i=5;i>=1;i--){
//     for(let j=i;j>=1;j--){
//         process.stdout.write(j + " ")
//     }
//     console.log("")
// }

//----------------------------------------------------------------------------

//1
//12
//123
//1234
//12345
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){  
//     process.stdout.write(i,"")  
// }
// console.log(" ")
// }

//------------------------------------------------------------------------------------------------

// 12345
//  1234
//   123
//    12
//     1
// n=5;
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
        
//         process.stdout.write(" ")
//     }
//         for(let k=1;k<=n;k++){
//             process.stdout.write(k + "")
//             }
//         n=n-1
//         console.log("")
//     }

//-----------------------------------------------------------------------------------------------

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
n=3
m=1   
for(let i=n;i>=1;i--){
    for(let j=i;j>=1;j--){
        process.stdout.write(" ")
    }
    for(let k=1;k<=m;k++){
        if(k==1){ 
        process.stdout.write("*" )
        }
        else{
            process.stdout.write("**" )
        }
    }
    m=m+1
    
    console.log(" ")
    
}
c=n-1
for(let i=1;i<n;i++){
    process.stdout.write(" ")
    for(let j=1;j<=i;j++){
        process.stdout.write(" ")
    }
    
    for(let k=c;k>=1;k--){
        if(k==1){ 
        process.stdout.write("*" )
        }
        else{
            process.stdout.write("**" )
        }
    }
    c=c-1
  console.log(" ")
}
