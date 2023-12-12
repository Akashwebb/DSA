a=[-3,-7,9,-2,1]   //acending order of negative and positive numbers
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a)