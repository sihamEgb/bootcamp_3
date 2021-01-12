//ex16.js

function findMinMaxIndex(myArray)
{
    let max = myArray[0] ;
    let min = myArray[0];
    for(let i = 0 ; i< myArray.length ; i++)
    {
        if(myArray[i] < min)
        {
            min = myArray[i];
        }
        if(myArray[i]>max)
        {
            max = myArray[i];
        }
    }
    return [myArray.indexOf(min),myArray.indexOf(max)];
   
}




let arr = [30,4,7,10,8,2,4];
//console.log(findMinMaxIndex(arr));