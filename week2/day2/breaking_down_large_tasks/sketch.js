let r;
let g;
let b;
let radius;
function setup(){
   createCanvas(500, 500);
   background(220);
   noStroke();
}

function draw(){
   radius = random(25, 100);
   r = random(0, 256);
   g = random(0, 256);
   b = random(0, 256);
   t = random(0, 256);
   fill(r, g, b, t);
   ellipse(
      mouseX + random(-50, 50),
      mouseY + random(-50, 50),
      radius,
      radius
   );
}

function mouseClicked(){
   background(220);
}