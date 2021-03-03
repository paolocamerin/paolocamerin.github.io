
let repetitions = 1;
let mainG ;
let tempG ;
let shp = 0; 
let offX = offY = ang = 0;
let offsetIncrement = 30;
let originX,originY;
function setup(){
    createCanvas(windowWidth,windowHeight);
    mainG = createGraphics(width,height);
    tempG = createGraphics(400,400);
    mainG.imageMode(CENTER);
    mainG.strokeWeight(5);
    mainG.noFill();
    mainG.stroke(21);
    
    originX = mainG.width/2;
    originY = mainG.height/2;
    //updateDrawing();
   //tempG.ellipse(200,200,200,200);
   mainG.image(tempG,mainG.width/2,mainG.height/2,tempG.width,tempG.height);
}

function draw(){
background(245);

image(mainG,0,0,width,height);
}

function updateDrawing(){
mainG.clear();
    mainG.push(); 
    mainG.translate(originX,originY);
    for(let i = 0 ; i < repetitions; i++){
        
        
        mainG.rotate(ang);
        if(i!=0){
            mainG.translate(offX,offY);  
        }
        
        
        mainG.ellipse(0,0,200,200);
    
    }

    mainG.pop();


}

function mousePressed(){
    originX = mouseX;
    originY = mouseY;  
    updateDrawing();
}
function keyPressed(){
   
    if(keyCode == UP_ARROW){
        offY-=offsetIncrement;

    }
    if(keyCode == DOWN_ARROW){
        offY+=offsetIncrement;
        
    }
    if(keyCode == LEFT_ARROW){
        offX-=offsetIncrement;
        
    }
    if(keyCode == RIGHT_ARROW){
        offX+=offsetIncrement;
        
    }

    if(key == '2'){
        repetitions ++;
        repetitions = constrain(repetitions, 0, 20);

    }

    if(key == '1'){
        repetitions --;
        repetitions = constrain(repetitions, 0, 20);

    }

    if(key == 'r'){
        ang +=0.2;
        ang = constrain(ang, -TAU, TAU);

    }

    if(key == 'e'){
        ang -=0.2;
        ang = constrain(ang, -TAU, TAU);

    }
    updateDrawing();

}
function drawShape(){
    tempG.clear();
    //tempG.translate(tempG.width/2,tempG.height/2);
    switch (shp){
            case 0:
                //draw circle
                tempG.ellipse(0,0,tempG.width,tempG.height);
            break;
            case 1:
                //draw square
            break;
            case 2:
                //draw point
            break;
            case 3:
            break;
            case 4:
            break;
            case 5:
            break;
            case 6:
            break;
            case 7:
            break;
            case 8:
            break;
            case 9:
            break;

    }

  
}