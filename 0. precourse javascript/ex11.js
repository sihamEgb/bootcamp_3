//ex11.js
const input = require('readline-sync');

let str = input.question('Enter a string ');


if (str === (str.split("").reverse()).join(""))
{
    console.log(str , 'is palindrome');
}
else
{
    console.log(str , 'not palindrome');
}