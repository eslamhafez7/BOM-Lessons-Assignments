/*
BOM [History Object] L108
    - History API
        - Properties
        - length
    - methods
        - back()
        - forword()
        - go(Delta) => Position in History
    - Search [for advanced knowledge]
        - pushState() 
        - replaceState
*/

console.log(window);
console.log(location);
console.log(history);

console.log(history.length);
console.log(history.scrollRestoration);
console.log(history.state);
history.back();
history.forward();
history.go(2);


// Add a new state to the history stack and update the URL
// window.history.pushState({ page: "profile" }, "Profile", "https://elzero.org");
// The URL will change to: https://www.example.com/profile

// Replace the current state in the history stack and update the URL
// window.history.replaceState({ page: "contact" }, "Contact", "https://google.com");
// The URL will change to: https://www.example.com/contact

