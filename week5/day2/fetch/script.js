// async function getRandomPerson(){
//     const url = "https://randomuser.me/api/?results=100";
//     const response = await fetch(url);
//     console.log(response);

//     const data = await response.json();
//     console.log(data.results[0]);

//     for (let i = 0; i < data.results.length; i++){
//         let newImage = document.createElement("img");
//         newImage.src = data.results[i].picture.medium;

//         let h1 = document.createElement("h1");
//         h1.innerHTML = data.results[i].name.first + " " + data.results[i].name.last;

//         let body = document.querySelector("body");
//         body.appendChild(newImage);
//         body.appendChild(h1);
//     }
// }

// getRandomPerson();

async function getPokemon(id){
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);

    let newImage = document.createElement("img");
    newImage.src = data.sprites.front_default;

    let body = document.querySelector("body");
    body.appendChild(newImage);

    let firstMove = data.moves[0].move.name;
    console.log(firstMove);
}

getPokemon(Math.ceil(Math.random() * 300));