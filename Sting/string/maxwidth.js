// Sample:
//  * ["This", "is", "an", "example", "of", "text", "justification."]
//  * maxwidth = 16
//  *
//  * This____is____an
//  * example__of_text
//  * justification.__

let a=["This", "is", "an", "example", "of", "text", "justification."]

ar=[]
let arr=[]
for(let i=0;i<a.length;i++){
    z=a[i].split("")
    arr.push(z.length)
}

width=16
for(let i=0;i<a.length;i++){
    
     
    ar.push(a[i])
   
    width=width-arr[i].length-1;
    if(width>arr[i+1]){
        console.log("h")
        continue;
    }
   else{
    console.log(ar)
       x=ar.length-2
       y=parseInt(width%x)
       for(let i=0;i<y;i++){ 
         
    }

}
width=16
}