let balls = [];
let r, g, b;

function setup(){
    for (let i = 0; i < 5; i++){
        balls.push(new Ball(200, 200));
    }
    createCanvas(500, 500);
    r = 255;
    g = 255;
    b = 255;
}

function draw(){
    background(0);

    fill(r, g, b);

    for (let i = 0; i < balls.length; i++){
        ellipse(balls[i].x, balls[i].y, 50, 50);
        balls[i].x += balls[i].xVal;
        balls[i].y += balls[i].yVal;

        if (balls[i].x + 25 > 500 || balls[i].x - 25 < 0){
            balls[i].xVal *= -1;
            onBounce();
        }

        if (balls[i].y + 25 > 500 || balls[i].y - 25 < 0){
            balls[i].yVal *= -1;
            onBounce();
        }
    }
}

class Ball{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xVal = random(-5, 5);
        this.yVal = random(-5, 5);
    }
}

function onBounce(){
    console.log("Bounce");
    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
    getDogImage();
}