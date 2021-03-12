
let curves;
let rad = 20;
let spd = .006;
let hu = 0;

let f;
let points = [];
let characters =[];
let temp = [];
let word = "UID21";
let offset = 0; 
let fontS = 200; 
let spacing = 30;
let overallBound = 0;
function preload(){
   f = loadFont("/visual_identity_21/Assets/Proxima Nova Extrabold.otf")
}

function setup(){
createCanvas(windowWidth,windowHeight);
textFont(f);
curves = [];


temp = f.textToPoints('UID21', 100, height/2, 400, { 
   
   sampleFactor: 0.1, 

   simplifyThreshold: 0

});
let lastDist = createVector(0,0);
for(let n of temp){

   if(p5.Vector.dist(createVector(n.x,n.y),lastDist)>20 ){
      curves.push([]);
     
      print(curves);
   }
   lastDist = createVector(n.x,n.y);
   let v = new p5.Vector(n.x,n.y);
   
   curves[curves.length-1].push(v);


}
print(curves);



for(let ch of word){
//createCharacterPoints(ch);
}
console.log(curves[0]);
}

function draw(){
   background(21,21,80);
//noStroke();
 //offset = 0; 

 if(curves.length >= 1 ) {
		
   for(let i1=0; i1<curves.length; ++i1) {
      for(let j1=0; j1<curves[i1].length; ++j1) {
         for(let i2=0; i2<curves.length; ++i2) {
            for(let j2=0; j2<curves[i2].length; ++j2) {
               if(p5.Vector.sub(curves[i1][j1],curves[i2][j2]).mag() < 2*rad) {
                  curves[i1][j1] = curves[i1][j1].add(p5.Vector.sub(curves[i1][j1],curves[i2][j2]).setMag((2*rad-p5.Vector.dist(curves[i1][j1],curves[i2][j2]))*spd));
                  // break;
               }
            }
         }
      }
   }
   
   for(let i1=0; i1<curves.length; ++i1) {
      for(let j1=1; j1<curves[i1].length; ++j1) {
         if(p5.Vector.sub(curves[i1][j1],curves[i1][j1-1]).mag() > 2*rad) {
            curves[i1].splice(j1,0,p5.Vector.add(curves[i1][j1],curves[i1][j1-1]).mult(0.5));
            // break;
         }
      }
   }
   
} 
noFill();
strokeJoin(ROUND);
strokeWeight(10)
stroke("#F82C82");

if(curves.length >= 1) {
  
   for(let i=0; i<curves.length; ++i) {
     
      beginShape();
      for(let j=0; j<curves[i].length; ++j) {
        vertex(curves[i][j].x,curves[i][j].y);
         //point(curves[i][j].x,curves[i][j].y);
      }
      endShape();
      hu++;
   }

   //hu++
}


  //erase();
     //fill(23);
     /*
 push();
  translate(width/2-overallBound/2,height/2);

  for(let ch of points){
   beginShape();
   for(let p of ch.charPoints){
      vertex(p.x+offset,p.y);
      //point(p.x,p.y);
   }
   endShape(CLOSE);
   offset+=ch.bound.w+spacing;
   
  }
 
   pop();
    */
   //noErase();
   noStroke();
   textSize(20);
   fill(255);
   text(round(frameRate()),20,height-100);
}

function createCharacterPoints(ch){
   let bound;
   let charPoints = f.textToPoints(ch,0,0,fontS,{
      sampleFactor: 1,
      simplifyThreshold: 0
   });
   bound = f.textBounds(ch, 0, 0, fontS);
   points.push({charPoints,bound});
   overallBound+=bound.w+spacing;

console.log(points.length);
console.log(points[0]);
   
}

