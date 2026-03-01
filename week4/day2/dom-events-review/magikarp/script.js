let h1Element = document.querySelector("h1");
console.log(h1Element);

let clickDiv = document.getElementById("click_div");
console.log(clickDiv);

clickDiv.onclick = function(){
    clickDiv.innerHTML += "Magikarp";
}

let secondP = document.querySelector("div p");