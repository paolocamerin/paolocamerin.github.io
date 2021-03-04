let cnv;
let mouseActive = false;
let repetitions = 1;
let mainG ;
let tempG ;
let shp = "none"; 
let offX = offY = ang = 0;
let offsetIncrement = 30;
let originX,originY;
let rs;
let xOffsetSlects = 0; 
let saveButton;

let shapesNames =["none","circle","square","point"];

//Colours
let colours ;
let colourNames =["Red","Orange","Yellow","Light green","Dark green","Light blue","Dark blue","Black","Random"];
let selectedColour;
let randomColours = true;
let fixed = true;

function setup(){
    cnv = createCanvas(windowWidth,windowHeight);

    cnv.mouseOut(function() {
        mouseActive = false;
      });
      cnv.mouseOver(function() {
        mouseActive = true;
      });

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
 

    repeatSelect = createSelect();
    repeatSelect.position(xOffsetSlects+=100, 20);
    for(let i = 0;i < 21; i++){
        repeatSelect.option(i);
    }
    repeatSelect.selected(1);
    repeatSelect.changed(repetitionsSelectEvent);


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
    //shapeSelect.selected("none");
    shapeSelect.changed(shapeSelectionEvent);


    originX = mainG.width/2;
    originY = mainG.height/2;
    //updateDrawing();
   //tempG.ellipse(200,200,200,200);
   mainG.image(tempG,mainG.width/2,mainG.height/2,tempG.width,tempG.height);
}

function draw(){
background(245);

image(tempG,0,0,width,height);
image(mainG,0,0,width,height);
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

function mouseDragged(){
    if(mouseActive){
        originX = mouseX;
        originY = mouseY;  
        updateDrawing();
    }
    
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
        ang +=PI/20;
        ang = constrain(ang, -TAU, TAU);

    }

    if(key == 'e'){
        ang -=PI/20;
        ang = constrain(ang, -TAU, TAU);

    }
    updateDrawing();

}
function drawShape(sh){
    //tempG.clear();
    //tempG.translate(tempG.width/2,tempG.height/2);
    switch (sh){
            case "none":
            break;
            case "circle":
                //draw circle
                mainG.ellipse(0,0,200,200);
            break;
            case "square":
                //draw square
                mainG.rectMode(CENTER);
                mainG.rect(0,0,200,200);
            break;
            case "point":
                //draw point
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
  tempG.image(mainG,0,0,width,height);
  shapeSelect.selected("none");
  shp = shapeSelect.value();

 }