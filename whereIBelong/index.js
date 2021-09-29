/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


function whereIBelong(arr, num) {      [1,4,5,3,10].sort()  
    //sort array in ascending order
    arr.sort((a, b) =>  a - b)
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] >= num) { 
            return i
         }
    }
    return 0
 }
 
 // whereIBelong([1,2,3,4], 1.5)
 module.exports = whereIBelong