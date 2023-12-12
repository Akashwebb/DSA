// function longestValidParentheses(str){
//     let maxLen = 0;
//     let arr = [];
//     arr.push(-1);
//     for(let i = 0; i<str.length; i++){
//         if(str[i] === '('){
//             arr.push(i);
//         }
//         else{
//             arr.pop();
//             if(arr.length === 0){
//                 arr.push(i)
//             } else {
//                 maxLen = Math.max(maxLen, i - arr[arr.length - 1]);
//             }
//         }
//     }
//     return maxLen;
// }
 
// console.log(longestValidParentheses("()(()))))"));
// console.log(longestValidParentheses(")()())"));
// console.log(longestValidParentheses("((()"));
// console.log(longestValidParentheses("))()(("));

let x="({}{(})[])"   
count1=0
count2=0
count3=0
let arr=[]
for(let i=0;i<x.length;i++){
    if(x[i]=='(' ){
       count1++
    }else if(x[i]=='[' ){
        count2++
        
    }else if(x[i]=='{' ){
        count3++
    }else if(x[i]==')' ){
        count1--
       
    }else if(x[i]==']' ){
            count2--
    }else if(x[i]=="}"){
        count3--

    }
}
//console.log(arr)
if(count1==count2==count3==0){
    console.log("equal parathensis")
}else{
    console.log("not equal")
}