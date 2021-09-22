/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let answer = [1,1]
    for(let i = 1 ; i < n; i++){
        answer.push(answer[i] + answer[i -1] )
    }
return answer[answer.length - 1]

 
}

module.exports = fibonacci