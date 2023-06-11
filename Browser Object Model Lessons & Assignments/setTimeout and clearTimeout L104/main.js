/*
BOM [setTimeout and clearTimeout] L104
    - setTimeout(function, timeout, additional arguments)
    - clearTimeout(identifier)
    - 1 seconds = 1000 milliseconds
*/


/*
let btn = document.querySelector("button");

let counter = setTimeout(saymsg, 3000, "Eslam", 20);

function saymsg(user, age) {
    console.log(`My name is ${user} and I'm ${age} years old`);
}
console.log(counter);
btn.onclick =function() {
    clearTimeout(1);
}

// More Examples

function greet() {
    console.log("Hello World!");
}
let timeId = setTimeout(greet, 3000); // 1


let timeId1 = setTimeout(() => {
    console.log(`This is an anonymous function `);
}, 4000);
btn.addEventListener("click", () => {
    clearTimeout(timeId1);
}) // 2 


function displaymsg() {
    console.log("This message will be displayed after 5 seconds.");
}
setTimeout(displaymsg, 5000); // 3


let counter = 0;
function incrementCounter() {
    console.log(`Counter: ${counter}`);
    counter++;
let timeoutId2 = setTimeout(incrementCounter, 6000);
    if (counter === 5) {
    clearTimeout(timeoutId2);
    console.log("Execution stopped.");
    }
}
let timeoutId2 = setTimeout(incrementCounter, 6000); // 4
*/

