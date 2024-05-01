// A function is a block of code that performs a specific task. Dividing a complex
// problem into smaller chunks makes your program easy to understand and
// reusable.
const a = 12;
const b = 4;
sumOfTwoNumbers(a,b);
//
// do something else
//
const c = 2;
const d = 24;
sumOfTwoNumbers(c, d);
//
// do something else
//
const e = 5;
const f = 14;
sumOfTwoNumbers(e, f);

function sumOfTwoNumbers(i, j) {
    const sum = i + j;
    console.log("result is", sum);
}

//A function expression is very similar to and has almost the same syntax as a
// function declaration. The main difference between a function expression and a
// function declaration is the function name, which can be omitted in function
// expressions to create anonymous functions.
const square = function (num){
    return num*num;
}
console.log(square);
console.log(square(3));


