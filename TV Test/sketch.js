function setup(){
createCanvas(windowWidth,windowHeight);   
}

function draw(){
   background(0);

   noCursor();
   ellipse(mouseX, mouseY, width/20, width/20)
}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
}