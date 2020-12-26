//assignment1.js
const input = require('readline-sync');


/*
q1 - res
q2 - 
upside down

*/

let titles = ['First Question','Second Question','Third Question','FOURTH Question','FIFTH Question','SIXTH Question'];
let questions = ['How many white gowns do you have in your closet?','what color do you like?','what superpower do you want?','what is your favourite movie','what food do you like?','what do you if you find money on the sidewalk?'];
let answers = [
['What is a closet?','what is a gown?','Only one for Purim','I have only white gowns in my closet'],
['void','rainbow','white','red'],
['flying','invisibility','philanthropy','to be a genuis'],
['The Help','The Social Network','The Joker','Pay It Forward'],
['Vegan','Vegetarian','anything healthy','All Meat'],
['take it','Leave it alone','give it to charity','give it to the police'],
]
let result = 0;
console.log('####################');
console.log('###### WELCOME #####');
console.log('####################');

let i;
for(i = 0 ; i <questions.length ; i++)
{
    console.log('####################');
    console.log(titles[i]);
    console.log('####################');

    let res = input.keyInSelect(answers[i],questions[i]);
    //console.log('res',res+1);
    let temp = ((i+1) % 4); // this is the best answer
    if (temp === 0)
    {
        temp = 4;
    }
    let temp2 = 3 - ( (res+1) -temp ); // addition points
    if((res+1) < temp)
    {
       temp2 =  ((temp - (res+1) ) % 4) - 1;
    }
    
    result = result  + temp2 ;
}
if(result < 6)
{
    console.log('you are a bad person');
}
if (result >= 6 && result < 12)
{
    console.log('please surround yourself with good people');
}
if (result < 18 && result >= 12)
{
    console.log('need a little push toward the good side sometimes');
}
if (result == 18 )
{
    console.log('you are an angel');
}
