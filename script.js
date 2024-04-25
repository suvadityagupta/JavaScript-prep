//------DAY 1------>
//Intro to javascript #1

/*JavaScript is a scripting language that enables you to create dynamically
updated content, control multimedia, animate images, and much more.*/

/*Variables are containers for storing data (storing data values). We can declare
a variable by using these keywords.*/

/*Using let for declaring block-scoped variables (new)
Using const for declaring constant variables*/

let c = 10;
let d = 20;
console.log("c+d is", c + d);
//data types #2 //Javascript Type Conversion
/* 
1.JavaScript considers 0 as false
and all non-zero numbers as true.
And, if true is converted to a
number, the result is always 1.
2.String() takes null and undefined
and converts them to string.
3.In JavaScript, undefined, null, 0,
NaN,"converts to false. All other
values give true.*/

let x = 23;
y = 'Name'
console.log('the value of x is', x);
console.log('the type of x is', typeof(x));
console.log('the type of y is', typeof(y));
//We can change one type to another
let i = null;
console.log("i is ", i);
//if we try to convert something into a number which cannot be a number there it will print NaN(Not a Number)-->
//example:-
let num = "number";
num = Number(num);
console.log("num is ", num);

//Operators in Javascript #3
const e = 3;
const f = 4;
console.log(e+f);

const number1 = 3;
const number2 = 4;
const result = number1 + number2;
console.log(result);
/*Assignment Operators, Arithmetic Operators, Comparison Operators, Logical Operators, Bitwise Operators, String Operators */
//Assignment Operators-
let number3= 12;
number3 *= 4; //number3 = number3 * 4
console.log(number3);

