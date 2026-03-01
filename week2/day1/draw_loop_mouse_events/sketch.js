let xPos;
let yPos;
function setup(){
  createCanvas(500, 500);
  background(0);
  noStroke();
}

function draw(){
  ellipse(mouseX, mouseY, 25, 25);
}

function mouseClicked(){
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  fill(r, g, b);

}