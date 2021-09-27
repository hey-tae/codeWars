/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
    let arr = text.split(' ').sort((a,b) => a.length - b.length)
    return arr[arr.length - 1]
}

// runs a split method on strin
//takes a paramter of a string "text"// g, '"Jim Jones Jacob "effrey Joe/ example - longestWord is a function

// .split(' ')
// Array ["longestWord", "is", "a", "function"]

// .sort((a,b) => { ... }) - sorts in alphabetical order, comparing the first element to the 2n
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// another way
// function longestWord(text) {
//   let arr = text.split(' ').sort((a,b) => b.length - a.length)
//    return arr[0]
// }