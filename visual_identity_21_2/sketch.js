
let curves;

let d = 20;
let f;
let points = [];
let ang = 0; 
let word = "UID21";

function preload(){
   f = loadFont("/visual_identity_21_2/Assets/Proxima Nova Extrabold.otf")
}

function setup(){
createCanvas(windowWidth,windowHeight);
textFont(f);
rectMode(CENTER)


points = f.textToPoints('UID21', 100, height/2, 400, { 
   
sampleFactor: 0.1, 

   simplifyThreshold: 0

});
}

function draw(){
   clear();
  // noFill();
   strokeWeight(10);
   //blendMode(MULTIPLY);
   noStroke();
   //stroke("#F82C82");
   fill(248,42,130);
   for(let p of points){
      let x = p.x;
      let y = p.y;
      push();
      translate(p.x,p.y);
      rotate(radians(p.alpha));
      rect(0,0,d,d+10*sin(ang*(cos(x/10))),map(dist(x,y,mouseX,mouseY),0,1000,0,d));
      pop();
   }
ang+=0.02;
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}