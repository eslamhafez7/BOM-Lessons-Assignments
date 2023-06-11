/*
BOM [window open and clode] L107

    open("URL" "attr name or target[_blank]" "width=[], height=[], top=[], left=[]")
    close(void) close window only if you opened it by javascript
*/


let btn = document.getElementById("btn");
console.log(location.href);
window.onload = function() {
    window.open("http://google.com", "_self", "width=200");
}

setTimeout(function() {
    window.open("https://elzero.org", "_blank", "width=400, height=300, top=200, left = 200");
}, 5000);