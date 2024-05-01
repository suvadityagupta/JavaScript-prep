// Get the element with the id 'box-1'
const box1 = document.getElementById('box-1');
// box1.innerHTML = "<h1>Hello</h1> <p> Hello World</p>" // This line is commented out, so it won't be executed

// Set the background color of box1 to red
box1.style.backgroundColor = "red"

// Get all elements with the class 'box'
const boxes = document.getElementsByClassName('box');

// Loop through each element in the boxes array and add the class 'round-border'
for(let i = 0; i<boxes.length; i++) {
    boxes[i].classList.add('round-border');
}

// Remove the class 'round-border' from box1
box1.classList.remove('round-border');


// Create a new paragraph element
const newParagraph = document.createElement('p');
// Set the text content of the new paragraph to "This is brand new"
newParagraph.innerText = "This is brand new";
// Add the class 'box' to the new paragraph
newParagraph.classList.add('box');

// Get the element with the id 'container'
const container = document.getElementById('container');
// Append the new paragraph to the container
container.appendChild(newParagraph);



// const myBody = document.body;

// console.log(myBody);

// const box2 = document.getElementById('box-2');

// console.log(box2);

// const divs = document.getElementsByTagName('p');

// console.log(divs);

// const boxes = document.getElementsByClassName('random');

// console.log(boxes);

// const random = document.querySelectorAll('.container .random');

// console.log(random);

