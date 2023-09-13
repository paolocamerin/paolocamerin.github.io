let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera(PI / 10, 0, 0, 500);
  bubbles.push(new bubble(0, 0, 0, 100, 100, "#ff0000"));
}

function draw() {
  clear();
  sphere(30, 30, 30);

  for (let b of bubbles) {
    b.display();
  }
}

class bubble {
  constructor(x, y, z, r, n, c) {
    this.p = createVector(x, y, z);
    this.color = color(c);
    this.dataPoints = [];

    for (let i = 0; i < n; i++) {
      let v = p5.Vector.radnom3D().mult(r);
      this.dataPoints.push({ p: v, r: random(2, 5) });
    }
  }

  display() {
    stroke(this.color);
    for (let d of this.dataPoints) {
      point(this.p.x + d.p.x, this.p.y + d.p.y, this.p.z + d.p.z);
    }
  }
}
