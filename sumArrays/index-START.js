//PREP 

//P: PARAMETERS: array of numbers
//R: RESULTS: sum of #
//E: EXAMPLES/EDGE CASES Input: [1, 5.2, 4, 0, -1] Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
//P: PSEUDO CODE: we need to reduce the array to a single sum 

// CHALLENGE: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


// Sum Numbers
function sum (arr) {
    "use strict"
   return arr.reduce((acc,cur) => acc+cur, 0)
    };



