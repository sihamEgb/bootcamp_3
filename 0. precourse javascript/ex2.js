const input = require('readline-sync');

function myFunction() {
    let num1 = input.questionInt('Enter first number ');
    let num2 = input.questionInt('Enter second number ');

    if ((num1 + num2) === 10) {
        console.log('makes 10');
    }
    else
    {
        console.log('nope');
    }
  }

myFunction();
  /*
  myFunction(1,1);
  myFunction(10,0);
  myFunction("1","1");
  myFunction("10","0");
  myFunction("1","0");
  */
  
