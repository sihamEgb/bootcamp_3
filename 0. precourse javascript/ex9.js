//ex9.js

const input = require('readline-sync');
// return true if n is prime
function is_prime(n)
{
    let i ;
    for(i = 2 ; i < n ; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

let num = input.questionInt('Enter a number ');
let i ;
for(i = 1 ; i <= num ; i++)
{
    if (is_prime(i))
    {
        console.log(i);
    }
}