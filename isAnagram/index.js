/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/
//['s','i','l','e','n','t']

function isAnagram(stringA, stringB) {
    //stringA is made lowercase, then split by letter (no spaces) converting the strings into arrays, we then filter the elements to a - z globally so all instances of these characters are filtered, we then sort the individual characters (auto ascending (a-z)), we then join each array making them strings
   let a = stringA.toLowerCase().split('').filter(e => e.match(/[a-z]/g)).sort().join('') //that /[a-z]/ shit is wild
   let b = stringB.toLowerCase().split('').filter(e => e.match(/[a-z]/g)).sort().join('')
    //is a == b? boolean result
    
    return  a == b  
  }
  // 'hellooooooo'.match('o') => ['o','o','o']
  
  // 4 === 3 => false
  // 4 === 4 true
  // '4' === 4 false
  // '4' == 4 true
  
  module.exports = isAnagram
  
  // .toLowercase()
  // SILENT!! => silent!!
  
  // .split('')
  // Array ["s", "i", "l", "e", "n", "t", "!", "@"]
  
  // .filter(e => e.match(/[a-z]/g))
  // Array ["s", "i", "l", "e", "n", "t"]
  // ONLY keeps alphabetical letters. no special characters
  
  // .sort()
  // Array ["e", "i", "l", "n", "s", "t"]
  // sorts each character into alphabetical order
  
  // .join('')
  // "eilnst"
  // concatenates each element in the array
  
  
  // test('"I do not work weekends." is not an anagram of "I do not work weekdays!"', () => {
  //   expect(isAnagram('I do not work weekends.', 'I do not work weekdays!')).toBeFalsy()
  // })