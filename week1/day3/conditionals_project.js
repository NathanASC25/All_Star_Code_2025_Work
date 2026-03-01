process.argv.splice(4);
let species = process.argv[2];
let name = process.argv[3];
if (species == "Pokemon"){
    if (name == 'Pikachu'){
        console.log("Hello Pikachu, you're an electric mouse!");
    }
    else if (name == "Charmander"){
        console.log("Hello Charmander, your final evolution is cool beans!");
    }
    else{
        console.log("Hello", name, "we do not have your Pokemon data yet...");
    }
}
else if (species == "human"){
    console.log("Hello", name, "you're a human, not a Pokemom :(");
}
else{
    console.log("Unknown species... INTRUDER INTRUDER!");
}
