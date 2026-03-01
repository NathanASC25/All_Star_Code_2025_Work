//alert("Welcome to my Website!");

let header = document.querySelector("#first");
console.log(header);

header.style["color"] = "red";
header.style.backgroundColor = "gray";

let secondHeader = document.getElementById("second");
console.log("Second Header:", secondHeader);

//let targets = document.getElementsByClassName("target");
let targets = document.querySelectorAll("target");
console.log(targets);

for (let i = 0; i < targets.length; i++){
    targets[i].style.color = "green";
    targets[i].innerHTML = "This element is in an array";
}