/*
BOM [Assignment 3]
*/

let div = document.querySelector(".div");

function countDown() {
    div.innerHTML -= 1;
    if(div.innerHTML === "0") {
        console.log("count down");
        clearInterval(counter);
    };
};

let counter = setInterval(countDown, 1000);