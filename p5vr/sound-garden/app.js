function preload() {
  createVRCanvas();
}
let spheres = [];
function setup() {
  for (let i = 0; i < 150; i++) {
    spheres.push({
      p: createVector(
        random(-2000, 2000),
        random(-2000, 2000),
        random(-2000, 2000)
      ),
      d: random(10, 50),
      r: random(50, 200),
    });
  }
  noStroke();
  pointLight(250, 250, 250, 0, 0, -1000);
}

function draw() {
  setVRBackgroundColor(250, 180, 20);
  normalMaterial();
  for (let s of spheres) {
    push();
    translate(s.p.x, s.p.y, s.p.z);
    rotate(frameCount / s.r);
    sphere(s.d);
    pop();
  }
}
