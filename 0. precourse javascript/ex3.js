const input = require('readline-sync');

let num = input.question('Enter a number between 0 - 9 ');
let output = "";
switch(Number(num)){
    case 0:
        output = "ZERO";
        break;
    case 1:
        output = "ONE";
        break;
    case 2:
        output = "TWO";
        break;
    case 3:
        output = "THREE";
        break;
    case 4:
        output = "FOUR";
        break;
    case 5:
        output = "FIVE";
        break;
    case 6:
        output = "SIX";
        break;
    case 7:
        output = "SEVEN";
        break;
    case 8:
        output = "EIGHT";
        break;
    case 9:
        output = "NINE";
        break;
}
console.log(output);