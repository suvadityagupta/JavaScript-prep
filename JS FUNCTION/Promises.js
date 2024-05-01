const ticket = new Promise(function(resolve,reject){
    // const  isBoarded = false;
    const  isBoarded = true;
    if (isBoarded) {
        resolve("You are not in the flight")
    }else{
        reject("Your flight has been cancelled")
    }
})
ticket
.then((data) =>{
    console.log("Wohoo", data);
}).catch((data) =>{
    console.log("Oh no", data);
})
.finally(() => {
    console.log("I will always be executed");
});
