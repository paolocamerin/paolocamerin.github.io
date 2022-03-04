// Polar Perlin Noise Loop
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136-polar-perlin-noise-loops.html
// https://youtu.be/ZI1dmHv3MeM
// https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn
let pg;
let main;
let phase = 0;
let zoff = 0;
let zOffIncr;
let phaseIncr;
let myColor = "#FFC824";
let myWhite = "#F5F5F5";

//let pos = 0.01;
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);

  //slider = createSlider(0, 10, 1.0 , 0.1);
 zOffIncr=random(0.001,0.006);
 phaseIncr=random(0.001,0.0006);
  pg = createGraphics(width,height);
 resizeCanvas(windowWidth, windowHeight);
}

function draw() {
 
pg.background(myColor);

  clear();
  //background(color(myColor));
  fill(color(myColor));
  //translate(width / 2, height / 2);
  noStroke();
  //strokeWeight(2);
  //noFill();

  texture(pg);
  beginShape();
  let noiseMax = 1;
  randomSeed(4444);
  for (let a = 0; a < TWO_PI; a += radians(random(1,15))) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, width/6, width/6*3);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  //phase += map(pos,2,10,0.001,0.1);
  phase += phaseIncr;
  zoff += zOffIncr;
  //print(pos);
  //pos = map(mouseX,0,width,2,3);

  //image(pg, 0, 0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //main.createGraphics(windowWidth, windowHeight);


}

function mouseWheel(event) {

  //move the square according to the vertical scroll amount
  // pos = map(event.delta/2,-300,300,2,10);
  //uncomment to block page scrolling
  //return false;
}