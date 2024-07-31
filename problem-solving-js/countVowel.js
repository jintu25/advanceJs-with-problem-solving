
// vowel count function
// when value is vowel show answer is: 1 
// and when value is not vowel show answer is: 0
function vowelCheck(value){
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of value) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const check = prompt('enter your value..')
const result = vowelCheck(check)
console.log(result)