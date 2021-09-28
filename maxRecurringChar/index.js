/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// parameters - string of text


function maxRecurringChar(text) {
    // Code goes here
    let counter = {}
   text.split('').map(e => counter.hasOwnProperty(e) ? counter[e] += 1 : counter[e] = 1) // checks for existing property & increments count of characters throughout the array
  return  Object.keys(counter).reduce((a,c)=> counter[a] > counter[c] ? a : c)
  
//   another way  Object.keys(counter).filter(e => counter[e] === Math.max(...Object.values(counter)))[0]
   // object.keys checks for property values (counter #) in the object
   // reduce() goes through the values and compares to which is greatest
   // returns most recurring character (property)
}



module.exports = maxRecurringChar;

// Object.keys(Math.max(...counter)) 