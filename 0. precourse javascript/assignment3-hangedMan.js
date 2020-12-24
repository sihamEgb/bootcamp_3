// hangedMan.js
const figlet = require('figlet');
 const input = require('readline-sync');
var data = ['happy','course','lear','epidemic','school','virtual'];

let guesses = 10;
let chosenWord = data[Math.floor(Math.random()*data.length)];
let foundLetterArray = [];
let gameFinished = false;

function maskTheWord(chosenWord,foundLetterArray)
{
    let maskedWord = '';
    //let lettersArray = chosenWord.split('');

    for(let i =0;i<chosenWord.length;i++)
    {
        if(foundLetterArray.includes(chosenWord[i]))
        {
            maskedWord = maskedWord + chosenWord[i];
        }
        else
        {
            maskedWord = maskedWord+'*';
        }
        
    }
    return maskedWord;
}

function addAGuess()
{
    let charInput = input.question('What is your guess? ');
    let inputDone = false;
    do{
        if(charInput.length != 1)
        {
            charInput = input.question('Please enter only one character ');
        }
        else if(!charInput.match(/[a-zA-Z]/))
        {
            charInput = input.question('Please enter a valid alphapet ');
        }
        else
        {
            inputDone = true
        }
    }
    while(!inputDone )
    return charInput;
}
console.log(figlet.textSync('Hang Man Game'));
console.log('lets start ');

let charInput;

do
{
    console.log('you have ', guesses ,  'guesses ');
    console.log('The word is: ',maskTheWord(chosenWord,foundLetterArray));
    charInput = addAGuess();
    if(chosenWord.includes(charInput))
    {
        if(!foundLetterArray.includes(charInput))
        {
            foundLetterArray.push(charInput);
        }
        let output = maskTheWord(chosenWord,foundLetterArray);
        console.log(output);
        if(!output.includes('*'))
        {
            gameFinished = true;
        }
    }
    else
    {
        guesses--;
        if(guesses === 0)
        {
            gameFinished = true;
            

        }
    }
}while(!gameFinished)

if(gameFinished)
{
    if(guesses > 0)
    {
        console.log(figlet.textSync('You Win'));    }
    else
    {
        console.log('you have no more guesses');
        console.log(figlet.textSync('You Lose'));
    }
}