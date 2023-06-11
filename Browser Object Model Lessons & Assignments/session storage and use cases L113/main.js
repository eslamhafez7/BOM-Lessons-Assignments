/*
DOM [Session Storage And Use Cases] L113
    - setItem
    - getItem
    - removeItem
    - clear
    - key
Information 
    - New Tab = New Session
    - Dublicate Tab = Copy Session
    - New Tab With Same URL = New Session
*/

window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("name", "Islam");

window.localStorage.clear()
window.sessionStorage.clear()

document.querySelector(".name").onblur = function() {
    console.log(this.value);
    window.localStorage.setItem("inputName", this.value);
}
window.sessionStorage.setItem("background", "#ffffff");

window.sessionStorage.clear()