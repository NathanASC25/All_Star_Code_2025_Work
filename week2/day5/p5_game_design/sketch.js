let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let score = 0;

let vegetaImg;
let yamchaImg;

let enemyWidth = 50;
let enemyHeight = 50;

function preload(){
   vegetaImg = loadImage("./images/MajinVegeta.jpg");
   yamchaImg = loadImage("./images/Yamcha.jpg");
}

function setup() {
   createCanvas(500, 500);
   imageMode(CENTER);
   noStroke();
}


function draw() {
   background(0);
   textSize(20);
   fill(255);
   text("Score: " + score, 15, 40);

   image(yamchaImg, enemyXPos, enemyYPos, enemyWidth, enemyHeight);
   image(vegetaImg, myXPos, myYPos, 150, 100);

   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }


   myLeft = myXPos - 75;
   myRight = myXPos + 75;
   myTop = myYPos - 50;
   myBottom = myYPos + 50;

   enemyLeft = enemyXPos - (enemyWidth / 2);
   enemyRight = enemyXPos + (enemyWidth / 2);
   enemyTop = enemyYPos - (enemyHeight / 2);
   enemyBottom = enemyYPos + (enemyHeight / 2);


   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {


   }


   else {
      enemyXPos = random(0, 501);
      enemyYPos = random(0, 501);
      enemyWidth = random(25, 100);
      enemyHeight = random(25, 100);
      score++;
   }
}
