class Particle {
  constructor(p, src) {
    this.pos = p;
    this.img = src;
    this.maxImgSize;
    if (src == imgs[1]) {
      this.maxImgSize = 60;
    } else {
      this.maxImgSize = 100;
    }

    this.d = random(20, this.maxImgSize);
    this.delta = random(TAU);
    this.acc = p5.Vector.random2D().mult(random(3));
    this.rotIncrement = random(-rotationSpeed, rotationSpeed);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.delta);
    image(this.img, 0, 0, this.d, this.d);
    pop();
  }

  move() {
    this.pos.add(this.acc);
    this.delta += this.rotIncrement;
  }

  reset() {
    let isOutOfScreen =
      this.pos.x > width * 1.2 ||
      this.pos.x < -width * 0.2 ||
      this.pos.y > height * 1.2 ||
      this.pos.y < -height * 0.2;

    if (isOutOfScreen) {
      this.pos = createVector(width / 2, height / 2);
    }
  }
}
