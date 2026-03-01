let leftState = "red";
let rightState = "blue";

function setup(){
   createCanvas(500, 500);
   strokeWeight(5);
   fill(255, 0, 0);
   rect(0, 0, 250, 250);
   fill(0, 0, 255);
   rect(250, 0, 250, 250);
}

function draw(){
   
}

function mouseClicked(){
   let withinLeft = mouseX > 0 && mouseX < 250;
   let withinRight = mouseX > 250 && mouseX < 500;
   let withinY = mouseY >= 0 && mouseY <= 500;
   if (withinLeft && withinY && leftState == "red"){
      leftState = "blue";
   }
   else if (withinLeft && withinY && leftState == "blue"){
      leftState = "red";
   }
   else if (withinRight && withinY && rightState == "blue"){
      rightState = "red";
   }
   else if (withinRight && withinY && rightState == "red"){
      rightState = "blue";
   }

   if (leftState == "red"){
      fill(255, 0, 0);
      rect(0, 0, 250, 250);
   }
   if (leftState == "blue"){
      fill(0, 0, 255);
      rect(0, 0, 250, 250);
   }
   if (rightState == "red"){
      fill(255, 0, 0);
      rect(250, 0, 250, 250);
   }
   if (rightState == "blue"){
      fill(0, 0, 255);
      rect(250, 0, 250, 250);
   }
}