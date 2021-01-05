//ex10.js
const input = require('readline-sync');

let str = input.question('Enter a string ');

//let res = str.replace(/\s/g, "*");
let res = str.replace(/[' ']/g, "*");

console.log(res);
