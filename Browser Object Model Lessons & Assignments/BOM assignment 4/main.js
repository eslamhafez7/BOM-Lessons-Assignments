/*
BOM [Assignment 4]
*/

let div = document.querySelector(".div");

function countDown() {
    div.innerHTML -= 1;
    if(div.innerHTML === "0") {
        window.open("https://elzero.org");
        clearInterval(counter);
    };
};

let counter = setInterval(countDown, 1000);