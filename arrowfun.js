let recArea = (length , width) => length * width;


let greeting = () => "Hello world!"

console.log(greeting());

let lenght = prompt("lenght?");
let width = prompt("width?");

document.getElementById("output").innerHTML =
recArea(lenght, width);

