/*
BOM [setInterval and clearInterval] L105
    - setInterval(function, timeout, additional arguments)
    - clearInterval(handler[function]);
*/




function saymsg() {
    console.log("I'm message from setInterval");
};

let counter = setInterval(saymsg, 1000);

setInterval(function() {
    console.log("i'm anonymus function")
}, 2000);

let div = document.querySelector("div");

// setInterval(function () {
//     div.innerHTML -= 1;
// })

function countdown() {
    div.innerHTML -= 1;
    if(div.innerHTML === "0") {
        console.log("counting stopped")
        clearInterval(counter2);
    }
}

let counter2 = setInterval(countdown, 500);