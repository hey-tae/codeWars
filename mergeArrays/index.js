/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


function mergeArrays(...arg) {
    let answer = []
    arg.forEach(e => answer.push(e));
    return [...new Set(answer.flat())]  
    
}


module.exports = mergeArrays

// .flat() - creates a new array with all sub-array elements concatenated into it
//

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]