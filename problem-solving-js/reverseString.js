// program to reverse a string

function reverseString(str) {
    // one way to reverse in string 
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

    // and shortcut way to reverse in string 
      // return str.split('').reverse().join('');
}

// take input from the user
// const string = prompt('Enter a string: ');
const result = reverseString('hello');
console.log(result);