let state = "white";

function setup(){
   createCanvas(500, 500);
   background(100);
   noStroke();
}

function draw(){
   fill(255, 0, 0);
   rect(0, 0, 100, 100);
   fill(0, 255, 0);
   rect(100, 0, 100, 100);
   fill(0, 0, 255);
   rect(200, 0, 100, 100);

   if (state == "white"){
      fill(255);
   }
   if (state == "red"){
      fill(255, 0, 0);
   }
   if (state == "green"){
      fill(0, 255, 0);
   }
   if (state == "blue"){
      fill(0, 0, 255);
   }
   ellipse(250, 250, 60, 60);
}

function mouseClicked(){
   let withinY = mouseY > 0 && mouseY < 100;
   if (mouseX > 0 && mouseX < 100 && withinY){
      state = "red"
   }
   else if (mouseX > 100 && mouseX < 200 && withinY){
      state = "green";
   }
   else if (mouseX > 200 && mouseX < 300 && withinY){
      state = "blue";
   }
   else{
      state = "white";
   }
}