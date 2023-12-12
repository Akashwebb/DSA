// let n=9;
// count=0
// for(let i=1;i<=n;i++){
    
//         if(n%i==0){
//             count++
//         }
//     }
// if(count==2){
//     console.log("prime")

// }else{
//     console.log("not")
// }

let a=20
for(let i=1;i<=a;i++){
    count=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++
        
        }
    }if(count==2){
        console.log(i)
    }
}



let n=10;
for(let i=1;i<n;i++){
    count=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
        
    }
    if(count==2){
        console.log(i)
    }
}