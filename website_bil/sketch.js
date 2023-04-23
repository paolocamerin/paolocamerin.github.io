let img;
let offSet = 10;
//let myColour = "#FFC824";
let myColour = "#F5F5F5";
let phase = 0;
let zoff = 0;
let minN;
let maxN;
let sFact = 1;
let innerLimit = 20;
function preload() {
  img = loadImage("1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //resizeCanvas(windowWidth, (windowWidth * img.height) / img.width);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  minN = width / 6;
  maxN = (width / 6) * 3;
  //clear();

  if (dist(mouseX, mouseY, width / 2, height / 2) < 300) {
    sFact = lerp(sFact, 1.4, 0.1);
    // stroke(255,map(sFact,1,1.4,255,0));
  } else {
    sFact = lerp(sFact, 1, 0.1);
    //stroke(255,map(sFact,1.4,1,0,255));
  }

  noStroke();
  fill(myColour);

  image(img, 0, 0, width, height);
  beginShape();

  vertex(-width / 2 - offSet, -height / 2 - offSet);
  vertex(-width / 2 - offSet, height / 2 + offSet);
  vertex(width / 2 + offSet, height / 2 + offSet);
  vertex(width / 2 + offSet, -height / 2 - offSet);

  beginContour();

  let noiseMax = 1;
  randomSeed(123);
  for (let a = 0; a < TWO_PI; a += radians(random(20, 70))) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, minN, maxN);
    let x = r * sFact * cos(a);
    let y = r * sFact * sin(a);
    x = constrain(x, -width / 2 + innerLimit, width / 2 - innerLimit);
    y = constrain(y, -height / 2 + innerLimit, height / 2 - innerLimit);
    vertex(x, y);
  }
  endContour(CLOSE);

  endShape();

  phase += map(sFact, 1, 1.4, 0.003, 0.008);
  zoff += 0.0006;
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth);
}

function mouseClicked() {
  open("https://www.paolocamerin.com/bilista", "_parent");
}
