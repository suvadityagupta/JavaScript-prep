// console.log("hello"); // prints "hello" to the console

// setTimeout(function () {
//     console.log("this will execute later"); // this function will be executed after 3000 milliseconds
// }, 3000);

// console.log("world"); // prints "world" to the console
// console.log("three"); // prints "three" to the console

/**
 * Retrieves cheese after a delay of 2000 milliseconds
 * @param {function} callback - function to be executed with the retrieved cheese
 */
function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀"; // assigns the string "🧀" to the cheese variable
        console.log("here is cheese", cheese); // prints "here is cheese 🧀" to the console
        callback(cheese); // executes the callback function with the cheese as an argument
    }, 2000);
}

/**
 * Creates dough using the provided cheese after a delay of 2000 milliseconds
 * @param {string} cheese - the cheese to be used in the dough
 * @param {function} callback - function to be executed with the created dough
 */
function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🫓"; // creates the dough by concatenating the cheese with "🫓"
        console.log("here is the dough", dough); // prints "here is the dough 🧀🫓" to the console
        callback(dough); // executes the callback function with the dough as an argument
    }, 2000);
}

/**
 * Bakes a pizza using the provided dough after a delay of 2000 milliseconds
 * @param {string} dough - the dough to be used in the pizza
 * @param {function} callback - function to be executed with the baked pizza
 */
function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕"; // creates the pizza by concatenating the dough with "🍕"
        console.log("here is the pizza", pizza); // prints "here is the pizza 🧀🫓🍕" to the console
        callback(pizza); // executes the callback function with the pizza as an argument
    }, 2000);
}

// retrieves cheese, then makes dough, and finally bakes a pizza
getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza); // prints "got my pizza 🧀🫓🍕" to the console
        });
    });
});