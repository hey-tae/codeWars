/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/
 //did anyone else notice the project folder is mispelled. TYPO TYPO TYPO
 function capSentence(text) {
    // .split > .join                        
    text = text.toLowerCase() //passing the parameter (text) through the string method [.toLowerCase]
   console.log( text.split(' '))
    return text.split(' ').map( e =>  e[0].toUpperCase() + e.slice(1)).join(' ') //is the `+` concatenating the two operations' results wtffff
    // ['the' ,'tales', 'of', 'scotch!'] // split(' ') - separating 'the tales of scotch!' by the space
    // ['The' ,'Tales', 'Of', 'Scotch!']   //this is what it looks like directly after the 'split'
  
  }
  
  console.log(capSentence('the tales of scotch!'), 'The Tales Of Scotch!')
  
  
  //`text.split()` will happen before it is passed through the .map() array method, which will return a new array
  //through the .map() method, we are passing through (e(`element`)). So we don't need to `i`, David is just being ExtraTM.
  // and it is also created a new array. 
  
  //map:
  
  // const array1 = [1, 4, 9, 16];
            
  // pass a function to map
  // const map1 = array1.map(x => x * 2);
            
  // console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  
  //split:
  
  // const animals = ['ant', 'bison', 'camel']
  // animals.slice(1)
  // copies array from index 1 onwards
  // ['bison', 'camel']
            
  // animals.slice(0, 2)
  // copies array from index 0 onwards but not including index 2 ('camel')
  // ['ant', 'bison']
  module.exports = capSentence
  
  ['ant', 'bison'].map((elemnt,leon,zebra) => {
  
  console.log(e , i ,arr )
  
  })
  
  // ant a ['ant', 'bison']
  // bison b ['ant', 'bison']
  
  for(let i =  0; i < arr.length; i++){
    
  }
  
  ['Bilbo', 'Gandalf', 'Nazgul'].forEach((element, zebra, array) => {
    alert(`${item} is at index ${zebra} in ${array}`)
  })
  // Bilbo is at index 0 in Bilbo, Gandalf, Nazgul
  // Gandalf is at index 1 in Bilbo, Gandalf, Nazgul
  // Nazgul is at index 2 in Bilbo, Gandalf, Nazgul