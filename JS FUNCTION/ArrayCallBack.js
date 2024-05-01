const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7]; // array of integers

// const firstNeg = (num) => { // function to check if a number is negative
//     return num < 0;
// };

// const result = a.findIndex(firstNeg); // find the index of the first negative number in the array
// console.log(result); // log the result to the console

a.forEach((num, i) => { // iterate over the array and log each number and its index
    console.log("array num", num, i);
});

const result = a.map(); // create a new array with the results of calling a function for every array element
console.log(result); // log the result to the console

// Note: The map function is not provided with a callback function, so it will return an array of undefined values.

// Array methods:
// map() creates a new array with the results of calling a function for every array element.
// filter() returns a new array with all elements that pass the test defined by the given function.
// every() checks whether all the elements of the array satisfy the given condition or not.
// some() checks whether at least one of the elements of the array satisfies the given condition or not.