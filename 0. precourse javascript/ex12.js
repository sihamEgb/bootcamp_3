//ex12.js
const input = require('readline-sync');

let str = input.question('Enter a string ');

function toUpper(match ){
    return match.toUpperCase();
}

let res = str.replace(/[aeouyi]/g, toUpper);
console.log(res);