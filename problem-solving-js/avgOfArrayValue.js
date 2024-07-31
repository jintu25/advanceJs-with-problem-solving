
function avgValue(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
}

const result = avgValue([4, 5, 9, 3, 8, 1])
console.log('avg value is: ', result)

