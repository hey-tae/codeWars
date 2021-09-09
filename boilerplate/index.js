// place the problem here
//You get an array of numbers, return the sum of all of the positives ones.



// P (parameter) - arr
// R (return) -  sum of all positives
// E (edge cases) - 
// P (pseudo code) - 

function positiveSum(arr) {
    //create a containter to hold the sum



    //loop through the array to find positive integers 
}

console.log((positiveSum([1,2,3,4,5])); // 15
console.log((positiveSum([1,-2,3,4,5])); // 13
console.log((positiveSum([])); // 0
console.log((positiveSum([-1,-2,-3,-4,-5])); // 0
console.log((positiveSum([-1,2,3,4,-5])); // 9

const positiveSum =arr => {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sum += arr[i];
     }
    }
   return sum;
   console.log(sum)
   }