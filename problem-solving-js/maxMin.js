

    // max value find function call 
function maxValue(value){
    return Math.max(...value)
}

// min value find function call

function minValue(value){
    return Math.min(...value)
}

const max = maxValue([35, 40, 45, 25])
console.log('max value is:', max)

const min = minValue([20, 12, 30, 33])
console.log('min value is:', min)
