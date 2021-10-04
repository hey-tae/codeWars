/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(num) {
    
    //if value of num equals 0 or 1
    if (num === 0 || num === 1){
        //return 1
        return 1
    }
    //if prior condition not met, go through below loop
    for(let i = num - 1; i >= 1; i--){//define i assign it parameter of num - 1; condition: i greater than or equal to 1; increment down by 1
        num *= i //multiply parameter of num by i
    }
    return num // return the above (num * i)
}
//if factorial(5), i is inialized by 4 because num - 1 === 5 - 1, it will then incrment down by one for each iteration 4 -> 3 -> -> 2...it cannot be  
// Example: factorial(5) // should return 120 | starting num (5) : 5 * 4 * 3 * 2 * 1
// cannot multiply by 0 because it will then be 1, so we stop at 1

module.exports = factorial

