
const value = prompt('enter your year')
function leapYear(year){
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}

const result = leapYear(value)
console.log('leapyear is: ', result)