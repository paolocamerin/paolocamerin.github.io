let cnv;
let mouseActive = false;
let repetitions = 1;
let mainG ;
let tempG ;
let images = [];
let shp = "none"; 
let targetAng = 0; 
let offX = offY = ang = targetOffX = targetOffY = 0;

let offsetIncrement = 30;
let originX,originY;
let angIncrement;
let dimension = 400; 
let rs;
let xOffsetSlects = 0; 
let saveButton;

let shapesNames =["none","ellipse","circle","square","triangle","line","point"];

//Colours
let colours ;
let colourNames =["Red","Orange","Yellow","Light green","Dark green","Light blue","Dark blue","Black","Random"];
let selectedColour;
let randomColours = false;
let fixed = true;


function setup(){
    cnv = createCanvas(windowWidth,windowHeight);
 
    cnv.mouseOut(function() {
        mouseActive = false;
      });
      cnv.mouseOver(function() {
        mouseActive = true;
      });
    angIncrement = PI/8;
    colours =[color("#FF6D8F"),color("#FFB36D"),color("#FFDF6D"),color("#BAF794"),color("#49D8BE"),color("#94C2F7"),color("#4987D8"),color("#606060")];
    selectedColour = colours[colours.length-1];
    mainG = createGraphics(width,height);
    tempG = createGraphics(width,height);
    mainG.imageMode(CENTER);
    mainG.strokeWeight(5);
    mainG.noFill();
    mainG.stroke(selectedColour);
    
    saveButton = createButton("Save ✏️");
    saveButton.position(width-saveButton.width*2,20);
    saveButton.mousePressed(saveDrawing);
 
    deleteButton = createButton("Delete ❌");
    deleteButton.position(width-saveButton.width*4,20);
    deleteButton.mousePressed(function(){
        images =[];
        //offX =0;
        //offY =0;
        targetOffX =0;
        targetOffY =0;
        shapeSelect.selected("none");
        shapeSelectionEvent();
        targetAng = 0;
        mainG.clear();
    });

    repeatSelect = createSelect();
    repeatSelect.position(xOffsetSlects+=30, 20);
    for(let i = 0;i < 21; i++){
        repeatSelect.option(i);
    }
    repeatSelect.selected(1);
    repeatSelect.changed(repetitionsSelectEvent);


    
    let buttonUp = createButton("UP");
    buttonUp.position(xOffsetSlects+=150, 20);
    buttonUp.size(70,20);
    buttonUp.mousePressed(function (){
        //offY-=offsetIncrement;
        targetOffY-=offsetIncrement;
        print("Move UP");
        updateDrawing();
    });

    let buttonDown = createButton("DOWN");
    buttonDown.position(xOffsetSlects, 70);
    buttonDown.size(70,20);
    buttonDown.mousePressed(function (){
       // offY+=offsetIncrement;
        targetOffY+=offsetIncrement;
        print("Move DOWN");
        updateDrawing();
    });


    let buttonLeft = createButton("LEFT");
    buttonLeft.position(xOffsetSlects-50, 45);
    buttonLeft.size(70,20);
    buttonLeft.mousePressed(function (){
        //offX-=offsetIncrement;
        targetOffX-=offsetIncrement;
        print("Move LEFT");
        updateDrawing();
    });

    let resetMove= createButton("RESET MOVE");
    resetMove.size(170,20);
    resetMove.position(xOffsetSlects-50, 100);
    resetMove.mousePressed(function (){
        //offX =0;
        //offY =0;
        targetOffX =0;
        targetOffY =0;
        print("Reset move");
        updateDrawing();
    });
    
    let buttonRight= createButton("RIGHT");
    buttonRight.position(xOffsetSlects+=50, 45);
    buttonRight.size(70,20);
    buttonRight.mousePressed(function (){
        //offX+=offsetIncrement;
        targetOffX+=offsetIncrement;
        print("Move RIGHT");
        updateDrawing();
    });

    let rotateLeft= createButton("⤴️");
    rotateLeft.position(xOffsetSlects+=100, 30);
    //rotateLeft.size(70,20);
    rotateLeft.mousePressed(function (){
        targetAng-=angIncrement;
        print("Rotate Left");
        updateDrawing();
    });

    let resetRotate= createButton("RESET ROTATION");
    resetRotate.position(xOffsetSlects, 70);
    //rotateLeft.size(70,20);
    resetRotate.mousePressed(function (){
        targetAng=0;
        print("Reset rotate");
        updateDrawing();
    });


    let rotateRight= createButton("⤵️");
    rotateRight.position(xOffsetSlects+=50, 30);
    //rotateRight.size(70,20);
    rotateRight.mousePressed(function (){
        targetAng+=angIncrement;
        print("Rotate Right");
        updateDrawing();
    });

    

    colourSelect = createSelect();
    colourSelect.position(xOffsetSlects+=100, 20);
    for(let i = 0;i < colourNames.length; i++){
        colourSelect.option(colourNames[i]);
    }
    colourSelect.selected("Black");
    colourSelect.changed(colourSelectionEvent);



    shapeSelect = createSelect();
    shapeSelect.position(xOffsetSlects+=100, 20);
    for(let i = 0;i < shapesNames.length; i++){
        shapeSelect.option(shapesNames[i]);
    }
    shapeSelect.selected("none");
    shapeSelect.changed(shapeSelectionEvent);
    imageMode(CENTER);

    originX = mainG.width/2;
    originY = mainG.height/2;
    //updateDrawing();
   //tempG.ellipse(200,200,200,200);
   mainG.image(tempG,mainG.width/2,mainG.height/2,tempG.width,tempG.height);

   
}







function draw(){
background(245);
translate(width/2,height/2);
//rotate(frameCount/100);
ang = lerp(ang,targetAng,0.1);
offX = lerp(offX,targetOffX,0.1);
offY = lerp(offY,targetOffY,0.1);
for(let i of images){
    //print(i.width);
    image(i,0,0,i.width,i.height);
}
//image(tempG,0,0,tempG.width,tempG.height);
image(mainG,0,0,mainG.width,mainG.height);

updateDrawing();

}






function updateDrawing(){
mainG.clear();
    mainG.push(); 
    mainG.translate(originX,originY);
    for(let i = 0 ; i < repetitions; i++){
        
        if(randomColours ){
            randomSeed((rs+i)*10000);
            mainG.stroke(colours[floor(random(colours.length))]);
           
        }else{
            mainG.stroke(selectedColour);
        }
        mainG.rotate(ang);

        if(i!=0){
            mainG.translate(offX,offY);  
        }
        
        drawShape(shp);
       
    
    }
    

    mainG.pop();


}


function drawShape(sh){
    //tempG.clear();
    //tempG.translate(tempG.width/2,tempG.height/2);
    switch (sh){
            case "none":
            break;
            case "ellipse":
                //draw circle
                mainG.ellipse(0,0,dimension,dimension*0.7);
            break;
            case "circle":
                //draw circle
                mainG.ellipse(0,0,dimension,dimension);
            break;
            case "square":
                //draw square
                mainG.rectMode(CENTER);
                mainG.rect(0,0,dimension,dimension);
            break;

            case "triangle":
                //draw square
                
                mainG.beginShape();
                for(let i = 0; i < 3; i++){
                    mainG.vertex((dimension/2)*cos(map(i,0,3,0,TAU)),(dimension/2)*sin(map(i,0,3,0,TAU)));
                }
                mainG.endShape(CLOSE)
                
                print("triangle");

            break;

            case "line":
                //draw point
                mainG.strokeWeight(5);
                mainG.line(-dimension/2,0,dimension/2,0);
            break;

            case "point":
                //draw point
                mainG.strokeWeight(10);
                mainG.point(0,0);
            break;
            

    }

  
}

function repetitionsSelectEvent() {
   repetitions = repeatSelect.value();
   updateDrawing();
}

function shapeSelectionEvent() {
    shp = shapeSelect.value();
    updateDrawing();
 }


 function colourSelectionEvent() {
     if(colourSelect.value() == "Random"){
        randomColours = true;
        rs = random(122222);
     }else{
        randomColours = false;
        selectedColour = colours[colourNames.indexOf(colourSelect.value())];
    }
    
    print(colourSelect.value());
    print(colourNames.indexOf(colourSelect.value()));
    print(selectedColour);
    updateDrawing();


 }

 function saveDrawing(){
  let storyImage = createGraphics(mainG.width,mainG.height);
  storyImage.image(mainG,0,0);
  images.push(storyImage);
  print(images);
  
  shapeSelect.selected("none");
  shp = shapeSelect.value();

 }


 class storyLayer{
     constructor(){

     }

     display(){
       image();  
     }
 }

 

 function mouseDragged(){
    if(mouseActive){
        originX = mouseX;
        originY = mouseY;  
        updateDrawing();
    }
    
}




function keyPressed(){
   
    if(keyCode == UP_ARROW){
        targetOffY-=offsetIncrement;

    }
    if(keyCode == DOWN_ARROW){
        targetOffY+=offsetIncrement;
        
    }
    if(keyCode == LEFT_ARROW){
        targetOffX-=offsetIncrement;
        
    }
    if(keyCode == RIGHT_ARROW){
    targetOffX+=offsetIncrement;
        
    }

    if(key == '2'){
        repetitions ++;
        repetitions = constrain(repetitions, 0, 100);

    }

    if(key == '1'){
        repetitions --;
        repetitions = constrain(repetitions, 0, 100);

    }

    if(key == 'r'){
        targetAng += angIncrement;
        targetAng = constrain(targetAng, -TAU, TAU);

    }

    if(key == 'e'){
        targetAng -=angIncrement;
        targetAng = constrain(targetAng, -TAU, TAU);

    }
    updateDrawing();

}