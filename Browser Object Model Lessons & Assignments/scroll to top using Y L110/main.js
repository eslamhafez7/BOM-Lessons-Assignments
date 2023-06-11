/*
BOM [Scroll To Top Using Y Practice] L110
    scrollY = [alias => pageYOffset]
    scrollX = [alias => pageXOffset]
*/

console.log(window.scrollY === window.pageXOffset);
let hbda = document.querySelector("h2");
let btn = document.querySelector("button");
window.onscroll = function() {
    if(window.scrollY >= 400) {
        // console.log(`value is ${window.scrollY}`);
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    };
};

btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
