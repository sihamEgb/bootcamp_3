//ex7.js

const input = require('readline-sync');


let n = input.questionInt('Enter positive number');
let i;
let res = 1;
for(i = 1 ; i <= n; i++)
{
    res = res * i;
}
console.log(res);
