//  Given a sorted array of length n, find pair of elements whose difference is k (a,b | a-b = k) 
//  and print these elements.
//  a=[2 ,4 ,12 , 8, 13 , 7, 9]      k=6

let a=[2,4,12,8,13,7,9]
k=2
for(let i=0;i<a.length;i++){
    
    for(let j=i+1;j<a.length;j++){
        if(a[i]-a[j]==k){
            console.log(a[i],a[j])
        }
        else if(a[j]-a[i]==k) {
             console.log(a[i],a[j])
        } 
    }
}