let r;
let g;
let b;
let radius;
function setup(){
   createCanvas(500, 500);
   background(0);
}

function draw(){

}

function mouseClicked(){
   r = random(0, 255);
   g = random(0, 255);
   b = random(0, 255);
   fill(r, g, b);
   radius = random(25, 100);
   ellipse(mouseX, mouseY, radius, radius);
}