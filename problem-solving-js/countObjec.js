
// object count function create 

function getCount(objects) {
    return objects.filter(({x, y}) => (x === y)).length;
}
// Define an array of objects
const arrayOfObjects = [
    { x: 1, y: 1 }, // first x and y same value
    { x: 2, y: 3 },
    { x: 3, y: 3 }, // second x and y object value same so that output is: 2
    { x: 3, y: 5 }
    // { x: 4, y: 4 }  when this is also use than output show 3 because of
    // here x and y are same value so that show output is: 3 
];

// Call the function with the array of objects
const count = getCount(arrayOfObjects);

// Print the result
console.log(count); 
