let vegetaImg;
let yamchaImg;

let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let score = 0;

let myWidth, myHeight;
let enemyWidth, enemyHeight;

function preload(){
   vegetaImg = loadImage("./images/MajinVegeta.jpg");
   yamchaImg = loadImage("./images/Yamcha.jpg");
}

function setup(){
   createCanvas(500, 500);
   imageMode(CENTER);
   myWidth = 150;
   myHeight = 100;
}

function draw(){
   background(0);
   image(vegetaImg, myXPos, myYPos, myWidth, myHeight);
   image(yamchaImg, enemyXPos, enemyYPos, enemyWidth, enemyHeight);
   if (keyIsDown(LEFT_ARROW)){
      myXPos -= 3;
   }
   if (keyIsDown(RIGHT_ARROW)){
      myXPos += 3;
   }
   if (keyIsDown(UP_ARROW)){
      myYPos -= 3;
   }
   if (keyIsDown(DOWN_ARROW)){
      myYPos += 3;     
   }

   myLeft = myXPos - (myWidth / 2);
   myRight = myXPos + (myWidth / 2);
   myTop = myYPos - (myHeight / 2);
   myBottom = myYPos + (myHeight / 2);

   enemyLeft = enemyXPos - (enemyWidth / 2);
   enemyRight = enemyXPos + (enemyWidth / 2);
   enemyTop = enemyYPos - (enemyHeight / 2);
   enemyBottom = enemyYPos + (enemyHeight / 2);

   if (myLeft < enemyRight ||
    
   ){

   }
   else{
      enemyHeight = random(25, 100);
      enemyWeight = random(25, 100);
   }
}