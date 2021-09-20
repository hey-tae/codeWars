/* 
let 
*/

function chunkArray(array, size) {
    let answer = []
    
    for(let i = 0; i < array.length; i += size){
        answer.push(array.slice(i , i + size))
    }
    return answer
    }
    
    
    module.exports = chunkArray
    
    // hey you all not sure if you can hear me but I think is working
    // function chunkArray(array,size){
    //     let arr = []
    //     for(let i = 0; i < array.length;i++){
    //         let newArr = array.slice(i, size)
    //         arr.push(newArr)
    //     }
    // }