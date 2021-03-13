
let curves = [];
let checkPoint = [];

let d = 20;
let diam = 300;
let f;
let points = [];
let temp;
let ang = 0; 
let word = "UID21";
let mousePos;
let resetting = false; 

function preload(){
   f = loadFont("/visual_identity_21_3/Assets/Proxima Nova Extrabold.otf")
}

function setup(){
createCanvas(windowWidth,windowHeight);
textFont(f);
rectMode(CENTER)

temp = f.textToPoints('UID21', 100, height/2, 400, { 
   
   sampleFactor: 0.3, 

   simplifyThreshold: 0

});

let lastDist = createVector(0,0);

for(let n of temp){

   if(p5.Vector.dist(createVector(n.x,n.y),lastDist)>20 ){
      curves.push([]);
      checkPoint.push([]);
      print(curves);
   }
   lastDist = createVector(n.x,n.y);
   let v = new p5.Vector(n.x,n.y);
   let v1 = new p5.Vector(n.x,n.y);
   curves[curves.length-1].push(v);
   checkPoint[checkPoint.length-1].push(v1);

}
print(curves);

strokeJoin(ROUND);
strokeCap(ROUND);
}

function draw(){
   clear();
   mousePos = createVector(mouseX,mouseY);
  noFill();
   strokeWeight(5);
   //blendMode(MULTIPLY);
   //noStroke();
   //stroke("#F82C82");
   stroke(248,42,130,);
   fill(248,42,130);
   
   for(let i = 0; i < curves.length; i++){
      
         beginShape();
            let n = 0;
            for(let j = curves[i].length-1; j > 0; j--){
               let p = curves[i][j];
               vertex(p.x,p.y);
               //text(n+=1,p.x,p.y);
               
               //push();
               //translate(p.x,p.y);
               //rotate(radians(p.alpha));
               //rect(0,0,d,d+10*sin(ang*(cos(x/10))),map(dist(x,y,mouseX,mouseY),0,1000,0,d));
               //pop();
            }

            if(i == 2){
                
               beginContour();
               let n1 = 0;
               for(let k = curves[i+1].length-1; k > 0; k--){
                  let p = curves[i+1][k];
                  //text(n1+=1,p.x,p.y);
                  vertex(p.x,p.y);
                  //push();
                  //translate(p.x,p.y);
                  //rotate(radians(p.alpha));
                  //rect(0,0,d,d+10*sin(ang*(cos(x/10))),map(dist(x,y,mouseX,mouseY),0,1000,0,d));
                  //pop();
               }
               endContour(CLOSE);
               i++;
            }
         
         endShape(CLOSE);
         
      }
      noFill();
      stroke(248,42,130,60);  
   ellipse(mousePos.x,mousePos.y,diam,diam);
   
ang+=0.02;
grab();
if(resetting){
reset();
}
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}

function grab(){
for(let c of curves){
for(let p of c){
   let d = p5.Vector.sub(mousePos,createVector(p.x,p.y));
  strokeWeight(4);
   stroke(21); 
if(d.mag()<diam/2){
   //print(d);
   point(p.x,p.y);
   if(mouseIsPressed){
      let scal = map(d.mag(),0,diam/2,1,0.1);
    p.x+=(mouseX-pmouseX)*scal;
    p.y+=(mouseY-pmouseY)*scal;
   }
//p.x = mousePos.x-(p.x-mousePos.x);
//p.y = mousePos.y-(p.y-mousePos.y);
}
}
}
}

function reset(){
   for(let c of curves){
      for(let p of c){
         p.x = lerp(p.x,checkPoint[curves.indexOf(c)][c.indexOf(p)].x,0.2);
         p.y = lerp(p.y,checkPoint[curves.indexOf(c)][c.indexOf(p)].y,0.2);
      }
   }
}

function keyPressed(){
   if(key == 'r'){
resetting=!resetting;
print(resetting);
   }

}

