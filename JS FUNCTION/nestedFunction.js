//Nested Function
//You may nest a function within
// another function. The nested (inner)
// function is private to its containing
// (outer) function.
function addSquares(a,b){
    const sa = square(a);
    const sb = square(b);

    function square(num){
        //we can only call square function in addSquares function because it is nested
        return num * num;
    }
    return sa + sb;

}
console.log(addSquares(3,4));

//Arrow Functions
//The arrow function is one of the features introduced in the ES6 version of JavaScript. 
// It allows you to create functions in a cleaner way compared
// to regular functions. Here are some of
// the valid syntax for arrow function:

const greet = ()=>{
    console.log("Hello World");
};
greet();

//to pass parameter
const greet1 = (count)=>{
    for (let i = 0; i < count; i++) 
        console.log("Hello World", count);
};
greet1(10);

const square1 = (num) => {
    return num * num;
}
console.log(square1(3));