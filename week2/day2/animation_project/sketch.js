let r = 0;
let g = 255;
let b = 0;
let xPos = 250;
let yPos = 25;
let speed;
let xMove = false;

function setup(){
   createCanvas(500, 500);
   background(0);
   speed = random(5, 20);
}

function draw(){
   background(0, 20);
   fill(r, g, b);
   ellipse(xPos, yPos, 50, 50);
   if (yPos > 525){
      yPos = 250;
      xPos = -25;
      xMove = true;
   }
   else if (xPos > 525){
      xPos = -25;
   }
   if (xMove){
      xPos += speed;
   }
   else{
      yPos += speed;
   }
}

function mouseClicked(){
   yPos = -25;
   xPos = 250;
   speed = random(5, 20);
   r = random(0, 256);
   g = random(0, 256);
   b = random(0, 256);
   xMove = false;
}