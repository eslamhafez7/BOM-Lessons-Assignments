/*
BOM [alert | confirm | prompt] L103
    - alert(Message) => Need no response only ok available
    - confirm(Message) => Need a response and return boolean
    - prompot(Message, Dfault Meassge) => Collect Data 
*/

window.alert("Good morning");
window.alert("Good one");
window.alert("Good");
console.log("alert");


let confirmMessgae = confirm("you sure?");
console.log(confirmMessgae);
if(confirmMessgae === true) {
    console.log("Item Deleted");
}else {
    console.log("Item not deleted");
};


let prompotMessage = prompt("When you are free?", "write a day");
console.log(prompotMessage);