/*
BOM [Scroll and other methods]
    - stop()
    - print()
    - focus()
    - scroll(X, Y || Options)
    - scrollTo(X, Y || Options)
    - scrollBy(X, Y || Options)
*/
console.log(scroll);
console.log(scrollTo);
console.log(scrollBy);


// let myneWindow = window.open("https://google.com", "_blank", "width = 200, height = 200");
// myneWindow.focus()
// myneWindow.close()

// window.scrollTo(1500, 2000);

// window.scrollTo({
//     top: 1500,
//     left: 1500,
//     behavior: "smooth"
// });

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 345 && window.scrollY <= 355) {
        console.log("Here we are");
    }
});

let scrollUp = document.getElementById("scroll-top");

let scrollTop = () => {
    let scrollUp = document.getElementById("scroll-top");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll"):scrollUp.classList.remove("show-scroll");
};
window.addEventListener('scroll', scrollTop);

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

