//ex15.js
const input = require('readline-sync');

function createArray(len)
{
    let arr = new Array();
    for(let i=0;i<len;i++)
    {   
        arr[i] = Math.floor(Math.random()*50+1);
        console.log(arr[i]);
    }

    let max = arr[0] ;
    let min = arr[0];
    
    for(let i =0 ;i<arr.length;i++)
    {  
        if (arr[i]<min)
        {
            min = arr[i];
        }
        if (arr[i]>max)
        {
            max = arr[i];
        }
    }
    console.log('max value in array is ',max);
    console.log('min value in array is ',min);
    
    
}



createArray(input.questionInt('Enter an integer '));