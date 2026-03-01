let myXpos = 250;
let myYpos = 250;

function setup(){
   createCanvas(500, 500);
   noStroke();
   
   rectMode(CENTER);
}

function draw(){
   background(0);

   fill(255, 0, 0);
   rect(myXpos, myYpos, 50, 50);

   if (keyIsDown(RIGHT_ARROW)){
      myXpos += 3;
   }
   if (keyIsDown(LEFT_ARROW)){
      myXpos -= 3;
   }
   if (keyIsDown(UP_ARROW)){
      myYpos -= 3;
   }
   if (keyIsDown(DOWN_ARROW)){
      myYpos += 3;
   }
}