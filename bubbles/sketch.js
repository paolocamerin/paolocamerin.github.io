let bubbles = [];
let rotX = 0;
let rotY = 0;

let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera(PI / 10, 0, 0, 500);
  bubbles.push(new bubble(0, -50, 0, 100, 300, "#6C3073"));
  bubbles.push(new bubble(100, 100, 0, 100, 300, "#C23073"));
  bubbles.push(new bubble(-100, 100, 0, 100, 300, "#323278"));
}

function draw() {
  clear();
  //orbitControl();

  let rotYtarget = map(mouseX, 0, width, -0.2, 0.2);
  let rotXtarget = map(mouseY, 0, height, -0.2, 0.2);

  rotX = lerp(rotX, rotXtarget, 0.1);
  rotY = lerp(rotY, rotYtarget, 0.1);
  rotateY(rotY);
  rotateX(rotX);

  for (let b of bubbles) {
    b.display();
  }
}

class bubble {
  constructor(x, y, z, r, n, c) {
    this.p = createVector(x, y, z);
    this.color = color(c);
    this.dataPoints = [];
    this.offset = random(20, 40);
    this.varyingAngle1 = random(TAU);
    this.varyingAngle2 = random(TAU);
    this.angleOff1 = random(0.2, 1);
    this.angleOff2 = random(0.2, 1);
    this.r = r;
    this.f = 300;
    for (let i = 0; i < n; i++) {
      let v = p5.Vector.random3D().mult(r);
      this.dataPoints.push({
        p: v,
        r: random(2, 5),
        off: createVector(0, 0, 0),
      });
    }
  }

  display() {
    this.varyingAngle1 += this.angleOff1;
    this.varyingAngle2 += this.angleOff2;
    stroke(this.color);
    for (let d of this.dataPoints) {
      strokeWeight(d.r);
      const n0 = map(
        noise(this.p.x + d.p.x / this.f + this.varyingAngle1 / this.f),
        0,
        1,
        -PI,
        PI
      );
      const n1 = map(
        noise(this.p.y + d.p.y / this.f + this.varyingAngle2 / this.f),
        0,
        1,
        -PI,
        PI
      );
      point(
        this.p.x + d.p.x + this.offset * sin(n0) * cos(n1),
        this.p.y + d.p.y + this.offset * sin(n0) * sin(n1),
        this.p.z + d.p.z + this.offset * cos(n0)
      );
    }
  }

  move() {
    for (let d of this.dataPoints) {
      d.off = noiseToSphere(
        noise(d.p.x, d.p.y, d.p.z + frameCount / this.f),
        noise(d.p.x, d.p.y, d.p.z + frameCount / this.f),
        this.r
      );
      d.p = p5.Vector.lerp(d.p, d.off, 0.2);
    }
  }
}

function noiseToSphere(n0, n1, r) {
  const a = map(n0, 0, 1, -PI, PI);
  const b = map(n1, 0, 1, -PI, PI);

  const x = r * sin(a) * cos(b);
  const y = r * sin(a) * sin(b);
  const z = r * cos(b);

  return createVector(x, y, z);
}
