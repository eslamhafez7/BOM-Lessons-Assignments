/*
BOM [Window Location Object] L106
    - Location object
        - href Get / Set [URL || Hash || File || Mail](save the entry history)
        - host
        - hash
        - protocol
        - reload(replace the entry history)
        - replace()
        - assign(save the entry history)
*/
console.log(window.location.href);
// window.location.href = "https://elzero.org";
console.log(location.host);
// console.log(window.location.hash);
console.log(location.protocol);
// location.protocol = "https"
console.log(location.pathname);
console.log(location.port);
// console.log(location.reload());