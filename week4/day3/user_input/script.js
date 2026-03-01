let submit = document.querySelector("button");
let div = document.querySelector("div");
let input = document.querySelector("input");
let select = document.querySelector("select");

submit.onclick = function(event){
    event.preventDefault();
    div.innerHTML = input.value;
    div.style.backgroundColor = select.value;
    
    if (input.value.length){
        div.innerHTML = input.value;
    }
    else{
        div.innerHTML = "Button was pressed"
    }
}