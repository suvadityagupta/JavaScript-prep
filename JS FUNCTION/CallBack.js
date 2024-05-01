//Callback Functions
// A callback is a function passed as an argument to another function.
const calculate = (a , b, operation) =>{
    return operation(a,b);
}
//method 1
const addition = calculate (3,4,function(n1,n2){
    return n1+n2;
})
console.log(addition);
//Method 2
const substraction = (a , b) => a - b;
const subResult = calculate(8, 3, substraction)
console.log(subResult);

//method 3
function multiply(a,b){
    return a*b;
}
const subMultiply = calculate(4,5,multiply)
console.log(subMultiply);