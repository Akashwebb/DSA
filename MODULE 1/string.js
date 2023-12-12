let x1=10.10; //number
let x2= 10;
console.log(x1,x2, typeof(x1));

let x3="hello";  // string
let alpha = '"akash" singh '  // "akash" singh 
let beta = " akash 'singh'";  // akash 'singh'
console.log(x3,alpha,beta, typeof(x3));

let s =10;
let s1='10';
console.log(s==s1);  //true -- as it compare only value
console.log(s===s1); //false -- as it compare data type

let foo = true;        //bollean
 foo='true';           //string
foo = 12;            //number
console.log( typeof(foo));   // number  coz value of  foo changes from --""boolean to string to  number"

let arr=[12,"akash",true];  //array  --  array can take string,number,boolean any ,,-- 
console.log(arr , typeof(arr));    // array is **collection of different data type**  in JAVASCRIPT

let ne = "10";
console.log(typeof(ne));    //STRING
neee = parseInt(ne);                   //typecase from String to Number
console.log(typeof(neee));   //NUMBER

fe = 10;
console.log(typeof(fe)); //NUMBER
fee = toString(fe);                      //typecase from Number to String
console.log(typeof(ne)); //STRING
