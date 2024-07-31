
// Complete the function in the editor below by returning a RegExp object, 
// , that matches any string  satisfying both of the following conditions:
// String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string  (i.e., the rest of the string after the prefix) 
// consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z]
//  and [A-Z]).


// regular expression use check string first value Mr, Mrs, Ms, Dr, Er...
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /(^Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/
    /*
     * Do not remove the return statement
     */
    return re;
}

const result = regexVar('Mr.ashraful')
console.log('result is: ', result)