let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
function setup(){
   createCanvas(500, 500);
   background(0);

   xSpeed = random(-5, 5);
   ySpeed = random(-5, 5);

   fill(0, 255, 0);
}

function draw(){
   background(0);

   ellipse(xPos, yPos, 50, 50);

   if (xPos >= 475 || xPos <= 25){
      xDirection *= -1;
   }
   if (yPos >= 475 || yPos <= 25){
      yDirection *= -1;
   }

   xPos += xSpeed * xDirection;
   yPos += ySpeed * yDirection;
}