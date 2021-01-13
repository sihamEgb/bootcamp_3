//ex17.js

function joinArrays(arr1,arr2)
{
    let joinedArray = arr1;

    arr2.forEach(element => joinedArray.push(element));
    return joinedArray;
}

let arr1 = ['a','b','c'];
let arr2 = ['aa','ss','ssiis','kfjr'];

console.log(joinArrays(arr1,arr2));