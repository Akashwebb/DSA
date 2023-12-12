// Question:
//   Bunny runs a reading club. He has a huge collection of books. It is very time consuming
//   for the readers to go and physically search for a book. So, Bunny wants to provide a
//   quick way to search for a book. Help Bunny to build a program that does this.
//   Input:
//   First Line contains a positive integer, say n, denoting the number of books with Bunny.
//   Next n lines contain one string each denoting the title of the book.
//   Next line contains a positive integer, say q, denoting the number of queries.
//   Next q lines contain one string each, denoting the book searched by a customer.
//   Output:
//   q lines containing one string each, Available or Not Available, denoting whether that
//   particular book is available or not.


let fs = require("fs"); // file system
 let data = fs.readFileSync('bookSearch.txt', 'utf-8');
 let idx = 0;
 data = data.split('\n'); //escape sequence
 function readLine() {
     idx++; //idx = idx + 1
     return data[idx - 1].trim();
 }
 /*--------------------------------------*/
let n = parseInt(readLine());
let books = [];
for(let i = 0; i<n; i++){
    books[i] = readLine();//books.push(readLine())
}
console.log(books);
let q = parseInt(readLine());
let queries = [];
for(let i = 0; i<q; i++){
    queries[i] = readLine();
}
console.log(queries);