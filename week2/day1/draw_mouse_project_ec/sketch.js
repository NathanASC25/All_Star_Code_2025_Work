let r;
let g;
let b;
function setup() {
   createCanvas(700, 450);
   background(240);
   rectMode(CENTER);
   noStroke();
   // charmander's face
   fill(247, 186, 133);
   rect(350, 225, 200, 200, 20);


   // charmander's eyes
   fill(29, 45, 49);
   rect(292.5, 182.5, 35, 65);
   rect(407.5, 182.5, 35, 65);
   fill(60, 109, 126);
   rect(292.5, 205, 35, 20)
   rect(407.5, 205, 35, 20)
   fill(26, 33, 41);
   rect(292.5, 185, 15, 40);
   rect(407.5, 185, 15, 40);
   fill(255, 255, 255);
   rect(300, 165, 10, 20);
   rect(400, 165, 10, 20);


   // charmander's mouth
   fill(160, 111, 141);
   rect(350, 272.5, 150, 55);
   fill(201, 153, 191);
   rect(350, 285, 120, 30);
   fill(255, 255, 255);
   rect(307.5, 292.5, 15, 15);
   rect(392.5, 292.5, 15, 15);
   rect(294, 254, 18, 18);
   rect(406, 254, 18, 18);


   // charmander's nose
   fill(206, 152, 116);
   rect(342.5, 231, 5, 12)
   rect(357.5, 231, 5, 12)
}

function draw() {
   
}

function mouseClicked(){
   background(220);
   let newSize = randomSize();
   randomFill();
   rect(350, 225, 200 * newSize, 200 * newSize, 20 * newSize);

   // charmander's eyes
   randomFill();
   rect(292.5, 182.5, 35, 65);
   rect(407.5, 182.5 , 35, 65);
   randomFill();
   rect(292.5, 205, 35, 20)
   rect(407.5, 205, 35, 20)
   randomFill();
   rect(292.5, 185, 15, 40);
   rect(407.5, 185, 15, 40);
   randomFill();
   rect(300, 165, 10, 20);
   rect(400, 165, 10, 20);


   // charmander's mouth
   randomFill();
   rect(350, 272.5, 150, 55);
   randomFill();
   rect(350, 285, 120, 30);
   randomFill();
   rect(307.5, 292.5, 15, 15);
   rect(392.5, 292.5, 15, 15);
   rect(294, 254, 18, 18);
   rect(406, 254, 18, 18);

   // charmander's nose
   randomFill();
   rect(342.5, 231, 5 * newSize, 12 * newSize);
   rect(357.5, 231, 5 * newSize, 12 * newSize);
}

function randomFill(){
   r = random(0, 255);
   g = random(0, 255);
   b = random(0, 255);
   fill(r, g, b);  
}

function randomSize(){
   return random(0.5, 2);
}