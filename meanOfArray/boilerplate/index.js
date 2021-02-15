// place the problem here
//You get an array of numbers, return the sum of all of the positives ones.



// P (parameter) - arr
// R (return) -  sum of all positives
// E (edge cases) - 
// P (pseudo code) - 


function getAverage(scores){
    //need to get average of scores - add all and divide by length of array, round dowm with math.floor 
    let sum=0 // *running total
    for (let i = 0; i < scores.length ; i++){
        //run for the lenth of the array 
        //bracket notation 
        sum = sum + scores [i]
        
    }
    }
   //find the average of the scores
   //console.log(sum/scores.length)
   //round down to nearest integer
   return Math.floor(sum/scores.length)
    
  }
  
  console.log("answer", getAverage([4,5,6,3,1,3,5,6]))
  console.log("answer", getAverage([4,5,6,3,1,3,5,6]))

  //new array

  console.log("answer", getAverage([4,5,6,3,1,3,5,6]))



