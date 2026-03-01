let charmanderImg;
let bulbasaurImg;
let squirtleImg;
let charmanderSound;
let bulbasaurSound;
let squirtleSound;
function preload(){
   charmanderImg = loadImage("./images/Charmander.png");
   bulbasaurImg = loadImage("./images/Bulbasaur.png");
   squirtleImg = loadImage("./images/Squirtle.png");
   charmanderSound = loadSound("./sounds/CharmanderSound.mp3");
   bulbasaurSound = loadSound("./sounds/BulbasaurSound.mp3");
   squirtleSound = loadSound("./sounds/SquirtleSound.mp3");
}

function setup(){
   createCanvas(600, 600);
   background(0);
   noStroke();
}

function draw(){
   fill(255, 0, 0);
   rect(100, 200, 100, 100);
   fill(0, 255, 0);
   rect(200, 200, 100, 100);
   fill(0, 0, 255);
   rect(300, 200, 100, 100);

   image(charmanderImg, 100, 200, 100, 100);
   image(bulbasaurImg, 200, 200, 100, 100);
   image(squirtleImg, 300, 200, 100, 100);
}

function mouseClicked(){
   if (mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
      charmanderSound.play();
   }
   if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
      bulbasaurSound.play();
   }
   if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300){
      squirtleSound.play();
   }
}