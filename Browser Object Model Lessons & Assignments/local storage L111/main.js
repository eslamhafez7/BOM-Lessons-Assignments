/*
BOM [Local storage] 
    - Is a property at the window let you access the storage object
    - setItem(key, "value")
    - getItem("value" || .key ||)
    - removeItem("key")
    - clear() [Clear all items]

Info 
    - Local storage does not have an expiration time.
        Data stored in the local storage remains persistent until it is explicitly
        removed by the website or cleared by the user.

    - Difference from HTTP(Hypertext Transfer Protocol) HTTPS(Hypertext Transfer Protoccol Secure)
        - HTTP does not provide encryption or data integrity(لا يوفر التشفير وسلامه البيانات)ز
        - While HTTPS HTTPS uses SSL/TLS encryption to secure
        the communication between the client and the server,
        ensuring that the data remains confidential and integral.


    - No local storage in private tabs
        Once the private browsing session is closed, the local storage data
        associated with that session is typically cleared.
*/


// Set
window.localStorage.setItem("color", "#000");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";


//Get
console.log(window.localStorage.getItem("fontWeight"));
console.log(window.localStorage.color);
console.log(window.localStorage.fontSize);
console.log(window.localStorage["fontSize"]);

// How to set bodyBG in the localStorage
document.body.style.backgroundColor = window.localStorage.getItem("color");


console.log(window.localStorage);
console.log(typeof window.localStorage);

// Remove

window.localStorage.removeItem("fontWeight");
window.localStorage.removeItem("fontSize");

// Clear

window.localStorage.clear()


// Example
localStorage.setItem('username', 'JohnDoe');
const username = localStorage.getItem('username');
console.log(username);
window.localStorage.clear()

