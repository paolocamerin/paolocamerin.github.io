let margin = 30;
let res;
let elements = [];
let radius = 150;
let mult;
let can;
function setup() {
  can = createCanvas(windowWidth, windowHeight);
  can.attribute("id", "sample");
  res = 15;
  mult = 0;
  rectMode(CENTER);
  let index = 0;
  for (let y = margin; y < height; y += (height - margin * 2) / res) {
    for (let x = margin; x < width; x += (width - margin * 2) / res / 2) {
      elements[index] = new Element(x, y, res);

      index++;
    }
  }

  noFill();
}

function draw() {
  //background(240);
  //clear();

  clear();
  for (let i = 0; i < elements.length; i++) {
    elements[i].show();
    elements[i].checkForMouseDistance();
    elements[i].rotation();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Element {
  constructor(xpos, ypos, dim) {
    this.d = 0;
    this.x = xpos;
    this.y = ypos;
    this.rot = false;
    this.r = 0;
    this.c = 255;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(map(this.r, 0, 360, 0, TWO_PI));
    //stroke(0);
    //point(0,0);
    stroke("#FFC824");
    strokeWeight(map(this.c, 0, 255, 15, 0));
    res = map(this.c, 255, 0, 15, 40);
    rect(0, 0, res * mult, res * mult);
    pop();
  }
  checkForMouseDistance() {
    let mousePos = createVector(mouseX, mouseY);
    let prevMousePos = createVector(pmouseX, pmouseY);
    if (
      dist(mousePos.x, mousePos.y, this.x, this.y) < radius &&
      p5.Vector.dist(mousePos, prevMousePos) != 0
    ) {
      this.rot = true;
    }
  }
  rotation() {
    mult = lerp(mult, res / 15, 0.05);
    if (this.rot && this.r < 360) {
      this.r = lerp(this.r, 360, 0.2);
      this.c = lerp(this.c, 120, 0.2);
      if (this.r > 350) {
        this.rot = false;
      }
    } else if (this.r > 0) {
      this.r = lerp(this.r, 0, 0.05);
      this.c = lerp(this.c, 255, 0.03);
    }
  }
}
