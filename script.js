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

//---------DAY 2 --------->>
//Conditional statements
const age = 12;
if(age >=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

//Ternary Operator
//condition? expression1: expression2
const marks = 50;
const result1 = (marks>=40) ? "Passed": "Failed";
console.log("result", result1);
//We cannot use const in If condition can only use conts while using ternary operator
//Switch Statements
const grade = 'A';
switch(grade){
    case "A": 
    console.log("A--> Very good");
    break;
    case "B": 
    console.log("B--> Satisfied");
    break;
    case "C": 
    console.log("C--> Average");
    break;
    case "D": 
    console.log("D--> Failed");
    break;
    default : 
    console.log("Invaild Grade");
}

//Loops
for (let index = 0; index < 5; index++){
    console.log(index);  
} 
//When we dont know how many times the loop will run we use while loop alike do-while
let step = 0;
while (step < 5) {
    console.log("Step", step);
    step += 1;
}
//to execute the body of loop is at least once we use do-while loop
let step1 = 0;
do {
    console.log("Step1", step1);
    step1 += 1;
} while (step1 < 5);
//Continue and Break
// The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.
// The break statement is used to terminate the loop immediately when it is encountered.
let step2 = 0;
while (step2 < 5) {
    // console.log("Step2", step2);
    step2 += 1;
    if (step2== 2) {
        // break; //it breaked the loop
        continue; //it skipped the 2nd iteration
    }
    console.log("Step2", step2);
}

//Arrays in Java Script
//An array is an object that can store multiple values at once. For Example:
// const newData = ['work','exercise', 1, true];
const words = ["Apple", "Banana", "Cherry"];
console.log(words);
//access elements of an array using indices (0, 1, 2 ...). For example,
const myArray = ['h','e','l','l','o'];
// first element
console.log(myArray[0]); // "h"
// second element
console.log(myArray[1]); // "e"
// Array in Javascript can be of mixed data types. For Example

const words1 = ["Apple", "Banana", "Cherry", 12 , true];
console.log(words1);
// You can find the length of an element (the number of elements in an array) using the length property. 
// For example,
console.log(words1.length);
//to update or change the array 
words1[0] = "Mango";
console.log(words1);

//Common Array Methods
const n = [5,4,3,2,1,0];
console.log(n);

//indexOf()-searches an element of an array and returns its position
console.log(n.indexOf(3));

//includes()-checks if an array contains a specified element
console.log(n.includes(7));

//push()-ads a new element to the end of an array and returns the new length of an array
n.push(7)
console.log(n);

// unshift() adds a new element to the beginning of an array and returns the new length of an array
n.unshift(6)
console.log(n);
//pop()-removes the last element of an array and returns the removed element
n.pop();
console.log(n);

//shift()-removes the first element of an array and returns the removed element
n.shift();
console.log(n);

//sort()-sorts the elements alphabetically in strings and in ascending order
n.sort();
console.log(n);

//slice() selects the part of an array and returns the new array
const subArray = n.slice(2,4);
console.log(subArray);

