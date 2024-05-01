// Define a function that logs a message to the console when called
function myFunction() {
    console.log('I was clicked');
}

// Define a function that logs a message to the console when the mouse is over an element
const mouseOver = () => {
    console.log('mouse over');
}

// Define a function that logs a message to the console when a key is pressed
function keyPressEvent() {
    console.log('key was pressed');
}

// Define a function that logs a message to the console when a key is released
function keyUpEvent() {
    console.log('key up was pressed');
}

// Define a function that logs a message to the console when a key is pressed down
function keyDownEvent() {
    console.log('key down was pressed');
}

//// event listeners

// Get the element with the id 'box-1'
const box1 = document.getElementById('box-1');
// Add an event listener to box1 that logs a message to the console when clicked
box1.addEventListener('click', () => {
    console.log('clicked on box');
})

// Get the element with the id 'container'
const container = document.getElementById('container');
// Add an event listener to container that logs a message to the console when clicked, 
// with the useCapture parameter set to true
container.addEventListener('click', () => {
    console.log('clicked on container');
}, true)

// Get the element with the id 'nameInput'
const nameInput = document.getElementById('nameInput');
// Add an event listener to nameInput that logs the key pressed to the console when a key is pressed down
nameInput.addEventListener('keydown', (e) => {
    console.log('key', e.key);
})

// Add an event listener to nameInput that logs a message to the console when it gains focus
nameInput.addEventListener('focus', (e) => {
    console.log('key', e);
})