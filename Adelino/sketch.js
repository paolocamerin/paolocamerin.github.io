let imgs = [];
let particles= [];
let main ;
let imageSize = 800;
let rotationSpeed = 0.1;
let maxParticles = 50;
let cam; 
let photomode = false; 
let constraints;
function preload(){
  for(let i = 1; i< 4; i++){
    
    
  }
  
  main = loadImage('woman.png');
  imgs.push(loadImage('1.png'));
  imgs.push(loadImage('2.png'));
  imgs.push(loadImage('3.png'));
  imgs.push(loadImage('4.png'));
  print(imgs);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);

   constraints = {
    video: {
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },
      optional: [{ maxFrameRate: 30 }]
    },
    audio: false
  };

  if(photomode){
    initializeCam();
  }
  
  for(let i = 0; i < maxParticles; i++){
    particles.push(new Particle(createVector(width/2,height/2),imgs[floor(random(imgs.length))]));
  }
}

function draw() {
  background("#7AB1DF");

  if(photomode && cam){
    push();
    translate(width/2,height/2);
    scale(-1,1);
    image(cam,0,0,width,height);
    pop();
  }
 

  for(let p of particles){
    p.display();
    p.move();
    p.reset();
  }
  
   
  //fill(21);
  if(photomode){
    image(main,width/2,height/4*3,imageSize,imageSize);
  }else{
    image(main,width/2,height/2,imageSize,imageSize);
  }

  
  //rect(width/2,height/2,300,300);
  
}

function mouseDragged(){
particles.push(new Particle(createVector(mouseX,mouseY),imgs[floor(random(imgs.length))]));
if(particles.length>maxParticles){
particles.shift();
}
}


class Particle{
  constructor(p,src){
    this.pos = p; 
    this.img = src;
    this.maxImgSize; 
    if(src==imgs[1]){
      this.maxImgSize = 60;
    } else{
      this.maxImgSize = 100;
    }
   
    this.d = random(20,this.maxImgSize);
    this.delta = random(TAU);
    this.acc = p5.Vector.random2D().mult(random(3));
    this.rotIncrement = random(-rotationSpeed,rotationSpeed);
  }
  
  display(){
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.delta);
    image(this.img, 0,0,this.d,this.d);
    pop();
  }
  
  move(){
    this.pos.add(this.acc);
    this.delta+=this.rotIncrement;
  }
  
  reset(){
   let isOutOfScreen = this.pos.x > width*1.2 ||this.pos.x < -width*.2 || this.pos.y > height*1.2 || this.pos.y < -height*.2 ;
    
    if(isOutOfScreen){
       this.pos = createVector(width/2,height/2);
       }
  }
  
 
}

function keyPressed(){
if(key===" " && photomode){
save(hour()+minute()+second()+millis()+'.jpg');
}

if(key === 'p' || key === 'P'){
photomode = !photomode;
if(!cam){
  initializeCam();
}
}


if(key === 'f' || key === 'F'){
  
    let fs = fullscreen();
    fullscreen(!fs);
  
}
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function initializeCam(){
  cam = createCapture(constraints,function(stream) {
    console.log(stream);
  });
  cam.hide();
}