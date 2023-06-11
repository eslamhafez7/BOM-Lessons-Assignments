/*
BOM [Assignment 6]
*/
let font = document.querySelector("#fonts");
let colors = document.querySelector("#colors");
let fontSize = document.querySelector("#font-sizes");

font.onchange = function() {
    window.localStorage.setItem("font", font.value);
    document.body.style.fontFamily = font.value;
};

colors.onchange = function() {
    window.localStorage.setItem("color", colors.value);
    document.body.style.color = colors.value;
};

fontSize.onchange = function() {
    window.localStorage.setItem("fontSize", fontSize.value);
    document.body.style.fontSize = fontSize.value;
};

document.body.style.fontFamily = window.localStorage.getItem("font");
document.body.style.color = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("fontSize");
font.value = window.localStorage.getItem("font");
colors.value = window.localStorage.getItem("color");
fontSize.value = window.localStorage.getItem("fontSize");