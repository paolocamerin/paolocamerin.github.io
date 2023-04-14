let points = [];
let target;
let head;
let acc;
let spd;
let ang = 0;
let isOver = false;
let f = 3;
let rng = 60;
let col;
let defCol;
let overCol;
let lineCol;
let pointerCol;

let strk = 1;
let cnv;
let d = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseOver(toggle);
  cnv.mouseOut(toggle);
  target = createVector(random(width), random(height));
  head = createVector(width / 2, height / 2);
  acc = createVector(0, 0);
  spd = createVector(0, 0);
  col = color(245, 0);
  defCol = color(245, 0);
  overCol = color(21, 128);
  lineCol = color(21);
  pointerCol = color("#FFC823");
}

function draw() {
  clear();
  background(col);
  if (isOver) {
    //col = lerpColor(col, overCol, 0.2);
    //lineCol = lerpColor(lineCol, color(245), 0.2);
    if (frameCount % 3 === 0) {
      //target.set(mouseX+random(-rng,rng), mouseY+random(-rng,rng));
      target.set(
        mouseX + rng * cos(frameCount / 10) * noise(frameCount / 10),
        mouseY + rng * sin(frameCount / 10) * noise(frameCount / 10)
      );
    }
    noCursor();
    strk = lerp(strk, 3, 0.1);
    d = lerp(d, 20, 0.1);
  } else {
    //col = lerpColor(col, defCol, 0.2);
    //lineCol = lerpColor(lineCol, color(21), 0.2);
    d = lerp(d, 0, 0.1);
    strk = lerp(strk, 1, 0.1);
    target.set(
      width / 2 +
        (width / 2) *
          cos((frameCount / 60) * f) *
          noise((frameCount / 100) * f),
      height / 2 +
        (height / 2) *
          sin((frameCount / map(noise(ang / 100), 0, 1, 60, 100)) * f) *
          noise((frameCount / 100) * f)
    );
  }
  noFill();

  acc = p5.Vector.sub(target, head);
  const magVal = map(noise(ang), 0, 1, 0.01, 4);
  acc.setMag(magVal);
  fill(0);
  //text(nf(frameRate(), 0, 0), 20, 20);
  spd.add(acc);
  spd.limit(10);
  head.add(spd);

  //head = p5.Vector.lerp(head,target,0.2);
  points.push(head.copy());

  noFill();
  stroke(lineCol);
  strokeWeight(strk);
  beginShape();
  for (let p of points) {
    curveVertex(p.x, p.y);
  }
  endShape();
  noStroke();
  fill(pointerCol);
  const mousePos = createVector(mouseX, mouseY);
  const prevMousePos = createVector(pmouseX, pmouseY);
  push();
  translate(mousePos.x, mousePos.y);
  rotate(p5.Vector.sub(mousePos, prevMousePos).heading());
  let dx = p5.Vector.dist(mousePos, prevMousePos) * 2;
  dx = constrain(dx, d, 100);
  ellipse(0, 0, dx, d);
  pop();

  if (points.length > 150) {
    points.shift();
  }

  ang += 0.02;
}

function toggle() {
  isOver = !isOver;
}

function windowResized() {
  cnv = resizeCanvas(windowWidth, windowHeight);
}
