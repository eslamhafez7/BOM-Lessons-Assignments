/*
BOM [Assignment 2]
    - create a function that create a popup
    - a close button
    - the function work after 5seconds on load
*/

// window.addEventListener("load", popUp);
let Parent = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let button = document.createElement("button");

function popUp() {
    h1.textContent = "Welcome";
    p.textContent = "Welcome To Elzero Web School";
    button.textContent = "X"
    Parent.appendChild(h1);
    Parent.appendChild(p);
    Parent.appendChild(button);
    document.body.appendChild(Parent);
    button.addEventListener("click", () => {
        button.parentElement.remove();
    });
};
setTimeout(popUp, 5000);

let style = document.createElement("style");

style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;500;600;800;1000&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,300;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,900&display=swap');
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
        font-family: 'Roboto', sans-serif;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #cccccc70;
        max-width: 400px;
        position: relative;
        padding: 15px 40px;
        font-family: 'Roboto', sans-serif;
    }
    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    p {
        font-size: 16px;
    }
    button {
        position: absolute;
        top: -6px;
        right: -6px;
        background-color: red;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
`
document.head.appendChild(style);