a=[2,1,1,6,9]    //o/p 9 coz 9 greater then its neighbour element

let max=0
if(a[0]>a[1]){
    max=a[0]
    
}
else if(a[a.length-1]>a[a.length-2]){
     max=a[a.length-1]
}
for(let i=0;i<a.length;i++){
    
    if(a[i+1]>i && a[i+1]>a[i+2]){
        max=a[i+1]
        }
}
console.log(max)