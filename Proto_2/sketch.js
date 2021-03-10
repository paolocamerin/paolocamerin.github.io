let url = '/Proto_2/assets/IMG_4513.png';
let d = 0; 
let dTarget = 300; 
let r = 0;
let rTarget = 300;
let n = 0; 
let iterations = 20;
let offRotation = 0; 
function preload(){
    img = loadImage(url)
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    imageMode(CENTER);
}
function draw(){
background(245);
translate(width/2,height/2);
switch (n){
    
    case 0:
       
    break;

    case 1:
        r = 0; 
        d = lerp(d, dTarget,0.2);
        
        image(img,0,0,d,d);
    break;

    case 2:
        d = lerp(d, dTarget,0.2);
        r = lerp(r,rTarget,0.2);
        for(let i = 0; i < iterations; i++){
            push();
            translate(r*cos(map(i, 0,iterations, 0, TAU)),r*sin(map(i, 0,iterations, 0, TAU)));
            rotate(map(i,0,iterations,0,TAU)+offRotation);
            image(img,0,0,d,d);
            pop();
        }
        offRotation = map(mouseX,0,width,0,TAU);
        rTarget = map(mouseY,0,height,-200,600);
    break;


}
fill(0);
text(round(frameRate()),-width/2+20,height/2-120);




}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight) ;
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        n++;
        d = 0; 
    }
    if(keyCode == DOWN_ARROW){
        n--;
        d = 0; 
    }
    if(keyCode == LEFT_ARROW){
        iterations--;
    }
    if(keyCode == RIGHT_ARROW){
        iterations++;
    }

}
