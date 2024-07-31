let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
//use filter and check duble value and remove dubol value
function removeDub(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(removeDub(arr))

// answer is [app, mango, orange]