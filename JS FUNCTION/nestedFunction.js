// Function to add the squares of two numbers
function addSquares(a, b) {

    // Call the square function for both input parameters
    const sa = square(a);
    const sb = square(b);

    // Nested function to calculate the square of a number
    // This function is private to the addSquares function
    function square(num) {
        // Return the square of the input number
        return num * num;
    }

    // Return the sum of the squares
    return sa + sb;
}

// Log the result of adding the squares of 3 and 4
console.log(addSquares(3, 4));

// Arrow function to print "Hello World"
const greet = () => {
    console.log("Hello World");
};

// Call the greet function
greet();

// Arrow function to print "Hello World" a specified number of times
const greet1 = (count) => {
    for (let i = 0; i < count; i++) 
        console.log("Hello World", count);
};

// Call the greet1 function with a parameter of 10
greet1(10);

// Arrow function to calculate the square of a number
const square1 = (num) => {
    // Return the square of the input number
    return num * num;
};

// Log the square of 3 using the square1 function
console.log(square1(3));