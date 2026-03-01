let myXpos = 250;
let myYpos = 250;
let enemyXpos = 300;
let enemyYpos = 300;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
function setup(){
   createCanvas(500, 500);
   noStroke();
   rectMode(CENTER);
}

function draw(){
   background(0);
   
   myLeft = myXpos - 25;
   myRight = myXpos + 25;
   myTop = myYpos - 25;
   myBottom = myYpos + 25;

   enemyLeft = enemyXpos - 25;
   enemyRight = enemyXpos + 25;
   enemyTop = enemyYpos - 25;
   enemyBottom = enemyYpos + 25;

   fill(255, 0, 0);
   rect(myXpos, myYpos, 50, 50);
   fill(0, 0, 255);
   rect(enemyXpos, enemyYpos, 50, 50);
   
   if (keyIsDown(UP_ARROW)){
      myYpos -= 3;
   }
   if (keyIsDown(DOWN_ARROW)){
      myYpos += 3;
   }
   if (keyIsDown(LEFT_ARROW)){
      myXpos -= 3;
   }
   if (keyIsDown(RIGHT_ARROW)){
      myXpos += 3;
   }
   if (
      myLeft > enemyRight ||
      myRight < enemyLeft ||
      myTop > enemyBottom ||
      myBottom < enemyTop
   ){
      // Nothing
   }
   else{
      fill(255);
      text("Collision!", 100, 100);
   }
}