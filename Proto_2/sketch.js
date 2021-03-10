let url = '/Proto_2/assets/IMG_4513.png';
let d = 0; 
let dTarget = 300; 
let r = 0;
let rTarget = 300;
let n = 0; 
let iterations = 20;
let offRotation = 0; 

let rotSlider,radSlider,iteSlider,dimSlider,buttonNplus,buttonNminus;
function preload(){
    img = loadImage(url)
}


function setup(){
    createCanvas(windowWidth,windowHeight-100);
    imageMode(CENTER);
    rotSlider = createSlider(-TAU,TAU, 0, 0.01);
    dimSlider = createSlider(0,1000, 300, 1);
    radSlider = createSlider(-400,400, 200, 1);
    iteSlider = createSlider(1,40, 6, 1);
    buttonNminus= createButton("N--");
    buttonNplus = createButton("N++");
    buttonNminus.mousePressed(function(){
        n--;
        n = constrain(n, 0, 2);
        d = 0; 
    });
    buttonNplus.mousePressed(function(){
        n++;
        n = constrain(n, 0, 2);
        d = 0; 
    });

    
}
function draw(){
background(245);
translate(width/2,height/2);
switch (n){
    
    case 0:
       
    break;

    case 1:
        r = lerp(r, rTarget,0.2);
        d = lerp(d, dTarget,0.2);
        rotate(offRotation);
        image(img,0,0,d,d);
        r =0;
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
        
    break;


}

offRotation = rotSlider.value();
dTarget = dimSlider.value();
rTarget = radSlider.value();
iterations = iteSlider.value();

fill(0);
//text(round(frameRate()),-width/2+20,height/2-120);





}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight) ;
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        n++;
        n = constrain(n, 0, 2);
        d = 0; 
    }
    if(keyCode == DOWN_ARROW){
        n--;
        n = constrain(n, 0, 2);
        d = 0; 

    }
    if(keyCode == LEFT_ARROW){
        iterations--;
    }
    if(keyCode == RIGHT_ARROW){
        iterations++;
    }

}
