//ex13.js

const input = require ('readline-sync');

function findLongestWord(arr)
{
    let max = 0;
    for(let i = 0 ; i< arr.length ; i++)
    {
        if((arr[i].length > arr[max].length) && (/^[a-zA-Z]+$/.test(arr[i])) )
        {
            max = i;
        }
    }
    return arr[max];
}
let str = input.question('Enter a string');

console.log(findLongestWord(str.split(" ")));