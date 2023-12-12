// Sample Input: ar = {5, 9, 16}, k = 5
// Sample Output: 2
// Explanation: Note that if we increment 9 by 1 and decrement 16 by 1(no. of operation = 2),
//  the new array will be {5, 10, 15} and hence the GCD will be 5.

let a=[5,9,16,23]
k=5
count=0;
for(let i=0;i<a.length;i++){
    if(a[i]%k==0){
        continue
    }
    else{
        rem=0;
        rem=(a[i]%k);
        if(rem<parseInt(k/2)){    //if its less then 3, subtract the remender
            f=a[i]-rem             // 16%5   rem=1  ,   1<3   so    16-1=15
            count++
            console.log(count,f)
        }
        else{
            y=0;
            y=k-rem               //if its more then 3, just add the difference of (k-3)
            g=a[i]+y              //23%5 --   rem=3  ,  5-3=2  ,,  add 23+2=25
            count++
            console.log(count,g)
        }

    }
}console.log(count)