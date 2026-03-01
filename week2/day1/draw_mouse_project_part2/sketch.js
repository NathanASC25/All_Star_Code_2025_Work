let r;
let g;
let b;
function setup(){
   createCanvas(500, 500);
   background(220);
}

function draw(){
   line(250, 250, mouseX, mouseY);
}

function mouseClicked(){
   background(220);
   r = random(0, 255);
   g = random(0, 255);
   b = random(0, 255);
   stroke(r, g, b);
}