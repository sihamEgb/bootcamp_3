//assignment2.js
const input = require('readline-sync');

function placeBet(amount)
{
    let bet = input.questionInt('Place your bet for the next round: 1 to 50 ');

    if (bet < 0 || bet > amount)
    {
        console.log('bye bye ... liars always lose in the game of war');
        continueGame = false;
        return 0;
    }

    let computeCard = Math.floor(Math.random()*12+1);
    let userCard = Math.floor(Math.random()*12+1);

    console.log('Your card is ',userCard , 'And my card is ',computeCard);
    if (computeCard >= userCard)
    {   
        console.log('You lost ', bet );
        return -bet;
    }
    else
    {   
        console.log('You won ', bet );
        return bet;
    }
}
console.log('//////////--------- WELCOME To WAR ---------/////////');
let name = input.question('please enter your name: ');
let amount = 50;
var continueGame = true;
console.log('welcome to the game',name,'now you have ',amount,'amount','ILS');

while(continueGame)
{
    amount = amount + placeBet(amount);
    if (continueGame )
    {
        console.log('And now you have ', amount);
    
        if(amount === 0)
        {
            console.log('You are broke... Bye Bye' );
            continueGame = false;
        }
        else
        {
            let answer = input.keyInSelect(['Play another round','Leave with my money'],'What would you like yo do? ')
            if (answer === 0 || answer === 2)
            {
                continueGame = true;
            }
            if (answer === 1)
            {
                continueGame = false;
                console.log('Congratulations! you won ', amount);
            }
        }
    }
}

