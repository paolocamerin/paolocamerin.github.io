let confetti;

let colorPalette = ["#AA21FF", "#E6BCFF", "#C8E9C7", "#FDCC93"];
let gravity;

let popSound, trumpetSound;
let imgs = [];

function preload() {
  imgs.push(loadImage("bg.png"));
  imgs.push(loadImage("content.png"));
  imgs.push(loadImage("tabbar.png"));
  popSound = loadSound("pop2.wav");
  trumpetSound = loadSound("trumpet.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  gravity = createVector(0, 0.15);

  confetti = createConfetti(width / 2, height / 5, 600);

  b = createButton("Make it pop!");
  b.position(
    width / 2 - b.width / 2,
    height - b.height / 2 - imgs[2].height - 32
  );
  b.mousePressed(function () {
    addConfetti(width / 2, height / 6, 300);
  });
  popSound.setVolume(0.3);
  trumpetSound.setVolume(0.1);
  noStroke();
}

function draw() {
  background("#FEF8F0");
  let bg = imgs[0];
  image(bg, width / 2 - bg.width / 2, 0);
  let content = imgs[1];
  image(content, width / 2 - content.width / 2, 0);
  for (let c of confetti) {
    c.move();
    c.display();
    c.delete();
  }

  let tab = imgs[2];

  image(tab, width / 2 - tab.width / 2, height - tab.height);
  //print(confetti.length);
}

function createConfetti(x, y, n) {
  print("POP!");
  popSound.play();
  //trumpetSound.play();

  let confettiBag = [];
  for (let i = 0; i < n; i++) {
    confettiBag.push(new confetto(x, y, random(colorPalette)));
  }
  return confettiBag;
}

function addConfetti(x, y, n) {
  print("POP!");
  popSound.play();
  //trumpetSound.play();

  if (confetti.length < 2000) {
    for (let i = 0; i < n; i++) {
      confetti.push(new confetto(x, y, random(colorPalette)));
    }
  }
}

function mousePressed() {
  let tx = mouseX;
  let ty = mouseY;
  if (ty < height / 3) {
    addConfetti(tx, ty, 300);
  }
}

class confetto {
  constructor(x, y, c) {
    this.p = createVector(x, y);
    this.col = c;
    this.d = random(3, 15);
    this.randRot = random(TAU);
    this.acc = p5.Vector.random2D();
    this.speed = createVector(0, 0);
  }
  move() {
    let drag = createVector(random(-1, 1), random(-0.1, 0));
    this.acc.add(gravity);
    this.acc.add(drag);
    this.acc.setMag(1);
    this.speed.add(this.acc);
    this.speed.limit(random(30));
    this.p.add(this.speed);
  }
  display() {
    fill(this.col);
    push();
    translate(this.p.x, this.p.y);
    rotate(this.randRot + frameCount / 10);
    ellipse(0, 0, this.d, this.d * sin((frameCount / 10) * this.randRot));
    pop();
  }

  delete() {
    if (this.p.y > height + this.d) {
      confetti.splice(confetti.indexOf(this), 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  b.position(
    width / 2 - b.width / 2,
    height - b.height / 2 - imgs[2].height - 32
  );
}
