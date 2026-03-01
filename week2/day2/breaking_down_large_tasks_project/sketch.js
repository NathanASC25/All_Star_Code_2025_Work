let r = 255;
let g = 0;
let b = 0;

function setup(){
   createCanvas(500, 500);
   background(0);
}

function draw(){
   background(0, 20);
   fill(r, g, b);
   rect(mouseX, 150, 100, 50);
   fill(g, r, b);
   rect(mouseX, 250, 100, 50);
   fill(g, b, r);
   rect(mouseX, 350, 100, 50);
}

function mouseClicked(){
   r = random(0, 256);
   g = random(0, 256);
   b = random(0, 256);
}