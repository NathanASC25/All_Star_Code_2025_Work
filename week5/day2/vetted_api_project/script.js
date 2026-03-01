let body = document.querySelector("body");

async function getYoda(){
    const url = "https://api.funtranslations.com/translate/yoda.json?text=" + "The first move of this Pokemon is" + getPokemon();
    const response = await fetch(url);
    console.log(response);
    
    const data = await response.json();
    console.log(data);
    
    body.appendChild(data.message)
}

async function getPokemon(id){
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    
    let div = document.createElement("div");
    let frontImg = document.createElement("img");
    let backImg = document.createElement("img");
    
    frontImg.src = data.sprites.front_default;
    backImg.src = data.sprites.back_default;

    div.appendChild(frontImg);
    div.appendChild(backImg);
    body.appendChild(div);

    let firstMove = data.moves[0].move.name;
    console.log(firstMove);

    return firstMove;

}

getPokemon(Math.floor(Math.random() * 300));
