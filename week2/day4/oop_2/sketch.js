let ball1, ball2, ball3;

let ballArray = [];

function setup(){
   createCanvas(500, 500);
   noStroke();
   for (let i = 0; i < 20; i++){
      let temp = new Ball(
         random(0, 500),
         0,
         random(0, 256),
         random(0, 256),
         random(0, 256),
         random(2, 5)
      );
      ballArray.push(temp);
   }
}

function draw(){
   background(0, 20);
   for (let i = 0; i < ballArray.length; i++){
      fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
      ellipse(ballArray[i].xPos, ballArray[i].yPos, 10, 10);

      ballArray[i].yPos += ballArray[i].speedValue;

      if (ballArray[i].yPos > 525){
         ballArray[i].yPos = -25;
      }
   }
}

class Ball{
   constructor(x, y, r, g, b, speed){
      this.xPos = x;
      this.yPos = y;
      this.redValue = r;
      this.greenValue = g;
      this.blueValue = b;
      this.speedValue = speed;
   }
}