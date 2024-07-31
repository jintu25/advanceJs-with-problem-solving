function checkPalindrome(string){
    for(let i = 0; i < string.length / 2; i++){   
        // check if first and last string are same
        if (string[i] !== string[string.length - 1 - i]) {
            return 'It is not a palindrome';
        }
        return 'it is palindrome'
    }
}
// take input
// call the function
const value = checkPalindrome("hello");
console.log(value);