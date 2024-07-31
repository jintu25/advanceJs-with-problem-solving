
function evenFun(even){
    return even % 2 === 0 ? "this is Even" : "this is Odd"
}

function oddFun(odd){
    return odd % 2 !== 0 ? "this is Odd" : "this is Even"
}

const valueFind = prompt('Enter your number')

// const result = evenFun(valueFind)
// console.log(result)

const oddRes = oddFun(valueFind)
console.log(oddRes)