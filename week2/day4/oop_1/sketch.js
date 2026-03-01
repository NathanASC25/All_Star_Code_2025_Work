// Non-OOP Method
// function setup(){
//    createCanvas(500, 500);
// }

// function draw(){
//    background(0);
//    fill(255, 0, 0);
//    ellipse(150, 250, 100, 100);
//    fill(0, 255, 0);
//    ellipse(250, 250, 100, 100);
//    fill(0, 0, 255);
//    ellipse(350, 250, 100, 100);
// }

let ball1, ball2, ball3;

let ballArray = [];

function setup(){
   createCanvas(500, 500);
   ball1 = new Ball(150, 250, 255, 0, 0);
   ball2 = new Ball(250, 250, 0, 255, 0);
   ball3 = new Ball(350, 250, 0, 0, 255);

   ballArray.push(ball1);
   ballArray.push(ball2);
   ballArray.push(ball3);
}

function draw(){
   background(0);

   for (let i = 0; i < ballArray.length; i++){
      fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
      ellipse(ballArray[i].xPos, ballArray[i].yPos, 100, 100);
   }
}

class Ball{
   constructor(x, y, r, g, b){
      this.xPos = x;
      this.yPos = y;
      this.redValue = r;
      this.greenValue = g;
      this.blueValue = b;
   }
}