let can; 
let d = 9;
let ran =[];
function setup() {


  can = createCanvas(windowWidth*.98, 1000);
  can.parent("canvasContainer");
  //rectMode(CENTER);

  for(let i = 0; i < 10; i++){
  ran.push(floor(random(50,150)));
  }
  print(ran);
}

function draw() {
  background(245);
  //randomSeed(123123);
  if(d%2==0){
    drawRectangle(0,0,width,height,d,height/2+(height/4)*sin(frameCount/ran[6])*noise(frameCount/ran[7]));
    //text("EVEN",20,20);
  }else{
    
    drawRectangle(0,0,width,height,d,width/2+(height/4)*sin(frameCount/ran[6])*noise(frameCount/ran[7]));
    //text("ODD",20,20);
  }
 


}

function drawRectangle(x,y,w,h,depth,mid){


  // fill(245);
   stroke(21);
   strokeWeight(1);
  // noStroke();
  // noFill();
  fill(map(h,0,height,0,600),map(w,0,width,0,600),100);
  rect(x,y,w,h);
  //text(depth, x+w/2,y+h/2);
  noStroke();
  fill(21);
  ellipse(x+w/2,y+h/2,5,5);

  //ellipse(x,y,5,5);
  if (depth > 1) {  
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable
   
      //console.log("Depth = " + depth);
      depth = depth - 1;  
      if(depth%2 === 0){
        //horizontal split
        //console.log("splitting horizontal");
        drawRectangle(x  , y , mid, h, depth,h/2+(h/4)*sin(frameCount/ran[1])*noise(frameCount/ran[2]));
        drawRectangle(x+mid  , y , w-mid, h,depth,h/2+(h/4)*sin(frameCount/ran[3])*noise(frameCount/ran[5]));
      }else{
        //vertical split
        //console.log("splitting veritcal");
        drawRectangle(x  , y , w, mid, depth,w/2+(w/4)*sin(frameCount/ran[2])*noise(frameCount/ran[4]));
        drawRectangle(x  , y+mid , w, h-mid,depth,w/2+(w/4)*sin(frameCount/ran[5])*noise(frameCount/ran[9]));

      }
    
     
    
    

  }
  
  //console.log("End of function");
  
}

function windowResized(){
  resizeCanvas(windowWidth*.98,windowHeight*.98);
}