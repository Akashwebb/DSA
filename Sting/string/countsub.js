// Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) 
//that have exactly k distinct characters. 

// Input: 
// S = "abaaca", K = 2
// Output:
// 7
// Explanation:
// The substrings are:
// "a", "b", "a", "aa", "a", "c", "a". 

let s="abaaca"
let k=2
for(let i=0;i<s.length;){
    x=s.split("",2)
    i++
    console.log(x)

}