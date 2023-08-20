class Wheel {
  constructor(x, y, r) {
    this.p = createVector(x, y);
    this.r = 0;

    this.spinAcc = random(10, 50);

    this.spin = this.randomAngle();
    this.stopAngle = this.randomAngle();
    this.drag = 0.995;
    this.isSpinning = false;
    this.selectedName = "????????";
    this.selectedDrink = "????????";
    this.pickingName = true;
    this.rTarget = 0;
  }
  randomAngle() {
    return random(TAU);
  }
  update() {
    if (this.isSpinning) {
      if (this.spin > 0.2) {
        this.spin *= this.drag;
      } else {
        this.isSpinning = false;
        this.spinAcc = random(30, 50);

        setTimeout(() => {
          cycleScenes();
        }, 3000);
      }
    }

    this.r = lerp(this.r, this.rTarget, 0.2);

    if (debug) {
      textAlign(LEFT);
      text(this.spin, 100, 20);
      text(this.spinAcc, 100, 40);
      text(this.isSpinning, 100, 60);
    }
  }
  display(mode, items) {
    const arcAng = TAU / items.length;
    let maxDist = 10000;
    switch (mode) {
      case "names":
        fill(0);
        noStroke();
        textAlign(RIGHT);
        textSize(16);
        for (let i of items) {
          const index = items.indexOf(i);
          const ang = (TAU / items.length) * index;
          const tipPos = createVector(width / 2, 100);
          const itemPosition = createVector(
            width / 2 + (this.r / 2) * cos(ang + this.spin + this.stopAngle),
            height / 2 + (this.r / 2) * sin(ang + this.spin + this.stopAngle)
          );

          const d = p5.Vector.dist(tipPos, itemPosition);
          if (d < maxDist) {
            maxDist = d;
            this.selectedName = i;
          }

          ellipse(itemPosition.x, itemPosition.y, 30, 30);

          push();
          translate(width / 2, height / 2);

          rotate(ang + this.spin + this.stopAngle);
          noStroke();
          fill(index % 2 === 0 ? "#ffffff" : "#FF5530");
          arc(0, 0, this.r, this.r, -arcAng / 2, arcAng / 2);
          fill(index % 2 === 0 ? "#FF5530" : "#ffffff");
          text(i, this.r / 2 - 30, 0);
          pop();
        }

        break;
      case "drinks":
        textAlign(CENTER);
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const ang = (TAU / items.length) * i;
          const tipPos = createVector(width / 2, 100);
          const itemPosition = createVector(
            width / 2 + (this.r / 2) * cos(ang + this.spin + this.stopAngle),
            height / 2 + (this.r / 2) * sin(ang + this.spin + this.stopAngle)
          );

          const d = p5.Vector.dist(tipPos, itemPosition);
          if (d < maxDist) {
            maxDist = d;
            this.selectedDrink = item;
          }

          push();
          translate(width / 2, height / 2);

          rotate(ang + this.spin + this.stopAngle);
          noStroke();
          fill(i % 2 === 0 ? "#ffffff" : "#FF5530");
          arc(0, 0, this.r, this.r, -arcAng / 2, arcAng / 2);

          push();
          translate(this.r / 2 - 30, 0);
          rotate(HALF_PI);
          if (this.rTaget != 0) {
            if (i % 2 === 0) {
              fill("#FF5530");
              image(imgs[5], 0, 200, 300, 300);
            } else {
              fill("#FFF");
              image(imgs[4], 0, 200, 300, 300);
            }
          }

          textAlign(CENTER, CENTER);
          textSize(48);
          text(item, 0, 0);
          pop();
          pop();
        }
        break;
    }

    // textAlign(LEFT, CENTER);
    // textSize(32);
    // text(this.selectedName, 100, height - 100);
    // textAlign(RIGHT, CENTER);
    // text(this.selectedDrink, width - 100, height - 100);

    textAlign(CENTER, CENTER);
    textSize(80);
    stroke("FFF");
    strokeWeight(10);
    fill("#FF5530");
    text(
      this.selectedName + "\n will have to drink a...\n " + this.selectedDrink,
      width / 2,
      height - 200
    );
    strokeWeight(5);
    fill(42);
    rect(width / 2, 100, 20, 50, 20);
  }
}
