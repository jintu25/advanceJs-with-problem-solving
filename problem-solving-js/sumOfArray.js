
function sumOfArray(arr){
   return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

const result = sumOfArray([2, 5, 2, 3, 9])
console.log('result is: ', result)