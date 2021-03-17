

let curves = [];
let checkPoint = [];
let brush; 
let d = 20;
let diam = 300;
let f,fr,socialImg;
let points = [];
let circles =[];
let temp;
let ang = 0; 
let word = "UID21";
let mousePos;
let resetting = false; 
let showPoints = false;
let hide = false; 
let freeze = false;
let saving = false;
let timer = 0;
let mode = 0; 
let noiseRes = 150;
let noiseSize = 40;
let incr = 0.001;
let zRadius = 100;
let labelOffY = 40;
let noiseSizeSlider, noiseResSlider,incrSlider;
let can;
let gDim = 1000;

let accentColor;

function preload(){
   f = loadFont("/visual_identity_21_3/Assets/Proxima Nova Extrabold.otf");
   fr = loadFont("/visual_identity_21_3/Assets/ProximaNova Regular.otf");
   socialImg = loadImage("/visual_identity_21_3/Assets/social_w.png");
}

function setup(){
//createCanvas(windowWidth,windowHeight/2);
can = createCanvas(windowWidth,windowHeight);

accentColor = color(242,50,130);

ang = random(100); 
//rectMode(CENTER);
//imageMode(CENTER);
noiseSizeSlider = createSlider(1, 400, 200, 1);
noiseResSlider = createSlider(1, 600, 400, 1);
incrSlider = createSlider(0.000005, 0.0001, 0.00005, 0.00001);
noiseSizeSlider.position(width/30*3,height/10*8);
noiseResSlider.position(noiseSizeSlider.x+noiseSizeSlider.width+30,height/10*8);
incrSlider.position(noiseResSlider.x+noiseResSlider.width+30,height/10*8);

textFont(f);
createBrush();
generateCircles();
createTextPoints();


print(curves);

strokeJoin(ROUND);
strokeCap(ROUND);


}

function draw(){
   //clear();
   background(21,0,42)
  // fill(21,0,42,10);
   //noStroke();
   //rect(0,0,width,height);
   mousePos = createVector(mouseX,mouseY);
   //noFill();
   //strokeWeight(5);
   //blendMode(MULTIPLY);
   //noStroke();
   //stroke("#F82C82");
   //stroke(248,42,130,);
   drawCircles();
   accentColor.levels[3] = 255; //Set alpha value
   fill(accentColor.levels[0],accentColor.levels[1],accentColor.levels[2],accentColor.levels[3]);
  
   for(let i = 0; i < curves.length; i++){
      
         beginShape();
            let n = 0;
            for(let j = curves[i].length-1; j > 0; j--){
               let p = curves[i][j];
               vertex(p.x,p.y+noiseSize*map(noise(p.y/noiseRes+zRadius*cos(ang)),0,1,-1,1));
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
                  
                  vertex(p.x,p.y+noiseSize*map(noise(p.y/noiseRes+zRadius*cos(ang)),0,1,-1,1));
               
                  //vertex(p.x+noiseSize*map(noise(p.x/noiseRes,p.y/noiseRes,zRadius*cos(ang)),0,1,-1,1),
                  //p.y+noiseSize*map(noise(p.x/noiseRes,p.y/noiseRes,zRadius*sin(ang)),0,1,-1,1));
                  //push();
                  //translate(p.x,p.y);
                  //rotate(radians(p.alpha));
                  //rect(0,0,d,d+10*sin(ang*(cos(x/10))),map(dist(x,y,mouseX,mouseY),0,1000,0,d));
                  //pop();
               }
               /*let l = curves[i+1][curves[i+1].length-1];
               curveVertex(l.x+noiseSize*map(noise(l.x/noiseRes+zRadius*cos(ang),l.y/noiseRes+zRadius*sin(ang),zRadius*cos(ang)),0,1,-1,1),
               l.y+noiseSize*map(noise(l.x/noiseRes+zRadius*cos(ang),l.y/noiseRes+zRadius*sin(ang),zRadius*sin(ang)),0,1,-1,1));
                 */ 
               //curveVertex(curves[i+1][1].x,curves[i+1][1].y);
               endContour(CLOSE);
               i++;
            }
            /*else{
               let l = curves[i][curves[i].length-1];
               let l2 = curves[i][curves[i].length-10];
               curveVertex(l.x+noiseSize*map(noise(l.x/noiseRes+zRadius*cos(ang),l.y/noiseRes+zRadius*sin(ang),zRadius*cos(ang)),0,1,-1,1),
                  l.y+noiseSize*map(noise(l.x/noiseRes+zRadius*cos(ang),l.y/noiseRes+zRadius*sin(ang),zRadius*sin(ang)),0,1,-1,1));
               
                  curveVertex(l2.x+noiseSize*map(noise(l2.x/noiseRes+zRadius*cos(ang),l2.y/noiseRes+zRadius*sin(ang),zRadius*cos(ang)),0,1,-1,1),
                  l2.y+noiseSize*map(noise(l2.x/noiseRes+zRadius*cos(ang),l2.y/noiseRes+zRadius*sin(ang),zRadius*sin(ang)),0,1,-1,1));
               
            }*/
                
         endShape(CLOSE);
         
      }
 

if(!freeze){
   ang+=incr;
}

  

switch (mode){
      case 0:
       if(saving){
print("Saving!!!!  Mode = " + mode);
       }
         if(hide){
            if(saving){
               print("Saving!!!! hiding");
                      }
            hideSliders();
            
         }else{
            if(saving){
               print("Saving!!!! Showing");
                      }
            showSliders();
          

         }

         showPoints = false;
         noiseSize = lerp(noiseSize,noiseSizeSlider.value(),0.1);
         noiseRes = lerp(noiseRes,noiseResSlider.value(),0.1);
         incr = lerp(incr,incrSlider.value(),0.1);
         
        
     
        
         //ellipse(width,height,gDim,gDim);
      break;
      case 1:
         showPoints = true;
         
         hideSliders();
         grab(true);
         if(!saving){
            image(brush, mouseX-brush.width/2,mouseY-brush.height/2);
         }
         
         //noiseSize = lerp(noiseSize,noiseSizeSlider.value(),0.1);
         //noiseRes = lerp(noiseRes,noiseResSlider.value(),0.1);
         noiseSize = lerp(noiseSize,0.1,0.1);
         noiseRes = lerp(noiseRes,0.1,0.1);
      break;
      case 2:
         showPoints = true;
         hideSliders();
         grab(true);
         reset(0.03);
         if(!saving){
            image(brush, mouseX-brush.width/2,mouseY-brush.height/2);
         }
         noiseSize = lerp(noiseSize,0.1,0.1);
         noiseRes = lerp(noiseRes,0.1,0.1);
      break;

      case 3:

         showPoints = false;
         hideSliders();
         grab(false);
         reset(0.05);
        
         noiseSize = lerp(noiseSize,0.1,0.1);
         noiseRes = lerp(noiseRes,0.1,0.1);
      break;

      case 4:
         showPoints = false;
         hideSliders();
         reset(0.5);
         noiseSize = lerp(noiseSize,0.1,0.1);
         noiseRes = lerp(noiseRes,0.1,0.1);
      break;
}

if(resetting){
   reset(0.3);
      timer++;
   if(timer>60){
      timer =0;
      resetting = false;
   }
}



fill(245);
noStroke();
textFont(fr);


textSize(height/9);
text("Shift Shapers", width/30*3,height/10*6);
textSize(height/25);
text("A Design Talk Show", width/30*3,height/10*6.7);
text("Tuesday June 1st @ 15.00 CET", width/30*3,height/10*7.5);
if(height>displayHeight/2 && !saving){
   let imgH = height/10*0.6;
   imgH = constrain(imgH, 16,36);
   let imgW = imgH*socialImg.width/socialImg.height;
   image(socialImg,width/30*3,height/10*9,imgW,imgH);

}



//text(round(frameRate()), 150,100);
if(saving || hide){
   hideSliders();
   //text("Press 'H' to show menu",width/10,height/10*9);
   }else{
      textSize(16);
      text("Press SPACE to generate new seed (Only mode 1)\nPress 'M' to switch between modes\nPress 'R' to reset(mode 2-3)\nPress 'H' to hide menu\nPress 'F' to freeze and unfreeze (Only mode 1)\nPress 'S' to save the image", width/30*15,height/10*8);
      textSize(36);
      text("Mode: " + mode, width/30*20,height/10*9.5);
   }




}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
noiseSizeSlider.position(width/30*3,height/10*8);
noiseResSlider.position(noiseSizeSlider.x+noiseSizeSlider.width+30,height/10*8);
incrSlider.position(noiseResSlider.x+noiseResSlider.width+30,height/10*8);
createTextPoints();
createBrush();
}

function grab(needToPress){
for(let c of curves){
for(let p of c){
   let d = p5.Vector.sub(mousePos,createVector(p.x,p.y));
  strokeWeight(20);
  accentColor.levels[3]=40;
   stroke(accentColor.levels[0],accentColor.levels[1],accentColor.levels[2],accentColor.levels[3]); 
if(d.mag()<diam/2){
   //print(d);
   if(showPoints && !saving){
      point(p.x,p.y);
   }
   let scal = map(d.mag(),0,diam/2,1,0.1);
   if(mouseIsPressed){
     
    p.x+=(mouseX-pmouseX)*scal;
    p.y+=(mouseY-pmouseY)*scal;
   }else if(!needToPress){
      
      p.x+=(mouseX-pmouseX)*scal;
      p.y+=(mouseY-pmouseY)*scal;

   }

}
}
}
}



function reset(rate){
   for(let c of curves){
      for(let p of c){
         p.x = lerp(p.x,checkPoint[curves.indexOf(c)][c.indexOf(p)].x,rate);
         p.y = lerp(p.y,checkPoint[curves.indexOf(c)][c.indexOf(p)].y,rate);
      }
   }
}

function keyPressed(){
   if(key == 'r' || key == 'R'){
      resetting=!resetting;
      print(resetting);
   }

   if(key == 'f' || key == 'F'){
      freeze=!freeze;
   }

   if(key == 'm' || key == 'M'){
      mode++;
      if(mode>4){
         mode = 0;  
      } 
   }

   if(key == 'h' || key == 'H'){
   hide=!hide;     
   }

   if(key == ' ' ){
      ang = random(1000);
      generateCircles();
      }

      if(key == 's'){
         saving = true;
         showPoints = false;
         console.log("saving triggered");
         console.log("saving = " + saving);
         redraw();
         save(can,'splashScreen'+hour()+minute()+second()+month()+day()+year());
         saving = false;
         showPoints = true;
         
      }

}


function hideSliders(){
   
      noiseResSlider.hide();
      noiseSizeSlider.hide();
      incrSlider.hide();
   
 
}

function showSliders(){
   if(saving){
      print("Saving!!!! Hiding sliders for export");
   }else if(!hide){
      noStroke();
      fill(245);
      textSize(16);  
      text("Displacement",noiseSizeSlider.x,noiseSizeSlider.y+labelOffY);
      text("Details",noiseResSlider.x,noiseResSlider.y+labelOffY);
      text("Speed",incrSlider.x,incrSlider.y+labelOffY);  
      noiseResSlider.show();
      noiseSizeSlider.show();
      incrSlider.show();
    
     
   }
   
}


function createTextPoints(){
   curves = [];
   checkPoint = [];
   points = [];

   temp = f.textToPoints('UID21', width/30*2, height/2, height/2.5, { 
   
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

}


function generateCircles(){
    
      gDim = random(height,height*3);
      circles = [];
      
      let x = random(width);
      let y = random(height);
      let off = random(height/10,height/10*2);
      for(let i = 0; i < 5; i++){
         
         gDim-=off;
         circles.push({x,y,gDim});
         }
}

function drawCircles(){
   accentColor.levels[3]=20;
   stroke(accentColor.levels[0],accentColor.levels[1],accentColor.levels[2],accentColor.levels[3]);
         strokeWeight(5);
         noFill();
         for(let p of circles){
            ellipse(p.x,p.y,p.gDim,p.gDim);
         }
}

function createBrush(){
   diam = height/1.5;
   brush = createGraphics(diam*2,diam*2);
   brush.clear();
   brush.translate(brush.width/2,brush.height/2);
   brush.noFill();
   accentColor.levels[3]=40;
   brush.stroke(accentColor.levels[0],accentColor.levels[1],accentColor.levels[2],accentColor.levels[3]);

   print(accentColor);
   brush.strokeWeight(10);
   brush.ellipse(0,0,diam,diam);
}