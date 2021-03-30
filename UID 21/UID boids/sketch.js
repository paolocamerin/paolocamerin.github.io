// Flocking
// Daniel Shiffman
// https://thecodingtrain.com

// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

const flock = [];

let alignSlider, cohesionSlider, separationSlider;
let g;
let f; 

function preload(){
  f = loadFont("/UID 21/UID boids/Assets/Proxima Nova Extrabold.otf")
}


function setup() {
  createCanvas(windowWidth, 360);
  alignSlider = createSlider(0, 2, .6, 0.1);
  cohesionSlider = createSlider(0, 2, .4, 0.1);
  separationSlider = createSlider(0, 2, .6, 0.1);
  for (let i = 0; i < 300; i++) {
    flock.push(new Boid());
  }
  colorMode(HSB,360,100,100);
  g = createGraphics(width, height);
  g.textFont(f);
  g.background(245);
  g.erase();
  g.noStroke();
  g.fill(21);
  g.textSize(200);
  g.text("UID 21",width/10,height/2);
  g.noErase();
}

function draw() {
  background("#F82C82");
  //lear();
  
  //text(alignSlider.value(),20,20);
  //text(cohesionSlider.value(),20,50);
  //text(separationSlider.value(),20,80);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
  image(g,0,0);
}
