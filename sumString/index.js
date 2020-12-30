// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
// If either input is an empty string, consider it as zero.

// P (parameter) - strings 
// R (return) - sum of strings
// E (edge cases) - If either input is an empty string, consider it as zero.
// P (pseudo code) - 


const sumStr = (a,b) => {
    return String(Number(a) + Number(b))
  }
    console.log(sumStr("4", "5"))    // should output "9"
    console.log(sumStr("34", "5"))   // should output "39"