let xPos = 250;
let xDirection = 1;
function setup(){
   createCanvas(500, 500);
   background(0);
   fill(0, 255, 0);
}

function draw(){
   background(0);
   ellipse(xPos, 250, 50, 50);

   if (xPos >= 475 || xPos <= 25){
      xDirection = xDirection * -1;
   }

   xPos += 3 * xDirection;
}