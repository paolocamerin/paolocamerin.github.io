function setup() {
  createCanvas(1000, 1000);

  //rectMode(CENTER);
}

function draw() {
  background(220);
  //randomSeed(123123);

  drawRectangle(0,0,width,height,8,height/2+(height/4)*sin(frameCount/100));

}

function drawRectangle(x,y,w,h,depth,mid){

  print(mid);
  fill(245);
  stroke(0);
  strokeWeight(2);

  //noFill();
  fill(245);
  rect(x,y,w,h);
  //text(depth, x+w/2,y+h/2);
  noStroke();
  fill(21);
  ellipse(x+w/2,y+h/2,5,5);

  //ellipse(x,y,20,20);
  if (depth > 1) {  
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable
   
      console.log("Depth = " + depth);
      depth = depth - 1;  
      if(depth%2 === 0){
        //horizontal split
        console.log("splitting horizontal");
        drawRectangle(x  , y , mid, h, depth,h/2+(h/4)*sin(frameCount/70));
        drawRectangle(x+mid  , y , w-mid, h,depth,h/2+(h/4)*sin(frameCount/100));
      }else{
        //vertical split
        console.log("splitting veritcal");
        drawRectangle(x  , y , w, mid, depth,w/2+(w/4)*sin(frameCount/200));
        drawRectangle(x  , y+mid , w, h-mid,depth,w/2+(w/4)*sin(frameCount/250));

      }
    
    
    

  }
  console.log("End of function");
  
}