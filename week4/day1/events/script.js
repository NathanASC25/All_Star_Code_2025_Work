let clickMe = document.getElementById("Click-Me!");
let hide = document.getElementById("hide");

let div = document.querySelector("div");
console.log("Background Color:", div.style.backgroundColor);

clickMe.onclick = function(){

    if (div.style.backgroundColor == "blue"){
        div.style.backgroundColor = "orange";
    }
    else{
        div.style.backgroundColor = "blue";
    }
}

hide.onClick = function(){
    if (div.style.display != "none"){
        
        hide.innerHTML = "Show";
    }
    else{
        div.style.display = "block";
        hide.innerHTML = "Hide";
    }
}

div.onmouseover = function(){
    div.innerHTML = "There is a mouse on me!";
}

div.onmouseout = function(){
    div.innerHTML = "The mouse has left...phew...";
}

div.onclick = function(){
    div.innerHTML = "AHHHH HE CLICKED";
}