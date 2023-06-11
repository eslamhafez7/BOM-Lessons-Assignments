/*
BOM [Assignment 1]
    - use prompt to recive a message
    - (Print Number From – To, Example: 5-20);
    - print all numbers between these tow numbers
*/
let message = prompt("Print number from - to", "Example: 5-20");
let promptNum = message.split("-").sort((a, b) => a - b);

for(let i = +promptNum[0]; i <= promptNum[1]; i++) {
    let num = document.createElement("div")
    num.textContent = i;
    document.body.appendChild(num);
}
console.log(promptNum[0]);
console.log(promptNum[1]);