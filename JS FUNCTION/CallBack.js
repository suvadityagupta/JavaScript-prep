// Callback Functions
// A callback is a function passed as an argument to another function.

// Function 'calculate' takes in three arguments: two numbers (a and b) and an operation (a function)
// It returns the result of applying the operation to the two numbers
const calculate = (a, b, operation) => {
    return operation(a,b);
}

// Method 1: Using an anonymous function as the operation
// Here, the operation is addition
const addition = calculate (3,4,function(n1,n2){
    return n1+n2;
})
console.log(addition); // Output: 7

// Method 2: Using a named function as the operation
// Here, the operation is subtraction
const substraction = (a, b) => a - b;
const subResult = calculate(8, 3, substraction)
console.log(subResult); // Output: 5

// Method 3: Using a function declaration as the operation
// Here, the operation is multiplication
function multiply(a,b){
    return a*b;
}
const subMultiply = calculate(4,5,multiply)
console.log(subMultiply); // Output: 20