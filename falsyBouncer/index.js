/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// note:  A falsy value is a value that is considered false when encountered in a Boolean context.
// using Boolean is checking to see if element of array equates to 'truthy'
// note:  a truthy value is a value that is considered true when encountered in a Boolean context.


function falsyBouncer(array) {
    return array.filter(Boolean)
}

// another approach 
// function test (array){

// function (test) is doing the same thing as falsyBouncer as it is filtering out all elements that aren't truthy such as NaN and null/     return array.filter(num => num != undefinded || num != '' || num != false || num != null || num != NaN  )
// }

umodule.exports = falsyBouncer

// filter: Creates a new array with all elements that pass the test.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
		  
// const result = words.filter(word => word.length > 6);
		  
// console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]
// (new array, with the words that were longer than 6 characters)

// Boolean: 