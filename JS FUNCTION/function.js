// A function is a block of code that performs a specific task. Dividing a complex
// problem into smaller chunks makes your program easy to understand and reusable.
const a = 12;
const b = 4;
sumOfTwoNumbers(a,b);

// do something else

const c = 2;
const d = 24;
sumOfTwoNumbers(c, d);

// do something else
//...

const e = 5;
const f = 14;
sumOfTwoNumbers(e, f);

// Function declaration: sumOfTwoNumbers
// This function takes two arguments, i and j, and logs their sum in the console.
function sumOfTwoNumbers(i, j) {
    const sum = i + j;
    console.log("result is", sum);
}

// Function expression: square
// This function takes one argument, num, and returns its square.
const square = function (num){
    return num*num;
}
console.log(square); // Logs the function definition
console.log(square(3)); // Logs the result of the function with input 3