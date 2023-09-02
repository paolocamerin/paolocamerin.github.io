let canvas;
let mf, rf;
let initialRotation = [-0.3, -1, 0];

let planets = [];
let stars = [];
let sky, venus, earth, mars, jupiter, saturn, uranus, neptune;
let cam;
let pos;
let timeString = `...`;

let yRotation, xRotation;
function preload() {
  mf = loadFont("./fonts/FiraCode-Medium.ttf");
  rf = loadFont("./fonts/FiraCode-Regular.ttf");
  sky = loadImage("./textures/sky.png");
  venus = loadImage("./textures/venus.jpg");
  earth = loadImage("./textures/earth.jpg");
  mars = loadImage("./textures/mars.jpg");
  jupiter = loadImage("./textures/jupiter.jpg");
  saturn = loadImage("./textures/saturn.jpg");
  uranus = loadImage("./textures/uranus.jpg");
  neptune = loadImage("./textures/neptune.jpg");
}
function setup() {
  canvas = createCanvas(50, 50, WEBGL);
  pixelDensity(displayDensity());
  canvas.parent("#canvasContainer");
  const par = select("#canvasContainer");
  //console.log(par);
  resizeCanvas(par.width, par.height);
  cam = new Dw.EasyCam(this._renderer, { distance: random(100, 500) }); // Set initial camera distance
  cam.setCenter([0, 0, 0]); // Set the camera's target at the center of the scene
  planets.push(new planet(50, 1, random(0.01, 0.001), null, false));
  planets.push(new planet(150, 1.5, random(0.01, 0.001), venus, false));
  planets.push(new planet(300, 3, random(0.01, 0.001), earth, false));
  planets.push(new planet(500, 3.5, random(0.01, 0.001), mars, false));
  planets.push(new planet(1000, 15, random(0.01, 0.001), jupiter, false));
  planets.push(new planet(1600, 12, random(0.01, 0.001), saturn, true));
  planets.push(new planet(2200, 10, random(0.01, 0.001), uranus, false));
  planets.push(new planet(2500, 9, random(0.01, 0.001), neptune, false));

  document.oncontextmenu = function () {
    return false;
  };
  pos = createVector(20, 20, 20);
  setInterval(calculateTime, 1000);

  perspective((60 * PI) / 180, width / height, 1, 10000);
  initialRotation[0] = random(-0.1, -PI / 3);
}

function draw() {
  background(10);
  yRotation = frameCount / 1000 + initialRotation[1];
  xRotation = initialRotation[0];

  rotateY(yRotation);

  push();
  rotateX(xRotation);
  ambientLight(255);
  lightFalloff(0.4, 0, 0);

  pointLight(250, 240, 200, 0, 0, 0);
  ambientMaterial(250, 200, 0);
  sphere(10, 32, 32);
  for (let p of planets) {
    p.display();
    p.update();
  }
  pop();
  ambientLight(100, 100, 120);
  texture(sky);
  noStroke();
  sphere(6000);

  displayHUD();
  // Set the camera's initial position
}

class planet {
  constructor(orbitRadius, planetRadius, revolutionSpeed, texture, hasRings) {
    this.or = orbitRadius;
    this.r = planetRadius;
    this.hasRings = hasRings;
    this.s = 1 / orbitRadius / 10;
    this.ang = random(TAU);
    this.imgTexture = texture ? texture : null;
    console.log(this.imgTexture);
  }

  update() {
    this.ang += this.s;
  }

  display() {
    this.drawOrbit();
    push();
    ambientMaterial(0, 0, 0);
    fill(255);
    if (this.imgTexture) {
      texture(this.imgTexture);
    }

    rotateY(this.ang);
    translate(this.or, 0, 0);
    if (this.hasRings) {
      push();
      rotateX(HALF_PI);
      rotateY(-0.4);
      noFill();
      stroke(200);
      for (let i = 0; i < 20; i++) {
        randomSeed(i * 10000);
        ellipse(0, 0, this.r * 6 + i * random(1, 4));
      }

      pop();
    }
    rotateY(frameCount / 20);

    sphere(this.r * 2, 32, 32);
    pop();
  }

  drawOrbit() {
    push();
    rotateX(PI / 2);
    noFill();
    stroke(245, 100);
    ellipse(0, 0, this.or * 2, this.or * 2, 40);
    pop();
  }
}

function calculateTime() {
  const startDate = moment("2022-09-03T00:00:00"); // Replace with your start date and time
  const endDate = moment(); // Replace with your end date and time
  const daysDiff = endDate.diff(startDate, "days");
  const hoursDiff = abs(daysDiff * 24 - endDate.diff(startDate, "hours"));
  const minutesDiff = abs(
    daysDiff * 24 * 60 + hoursDiff * 60 - endDate.diff(startDate, "minutes")
  );
  const seconds = abs(
    daysDiff * 24 * 60 * 60 +
      hoursDiff * minutesDiff * 60 -
      endDate.diff(startDate, "seconds")
  );

  const currentSeconds = moment().second();
  timeString = `Herin,\nthank you for these ${daysDiff} days ${hoursDiff} hours ${minutesDiff} minutes and ${currentSeconds} seconds!\n`;
}

function displayHUD() {
  cam.beginHUD();
  fill(255);

  fill(255);
  textFont(rf);
  textSize(24);
  textAlign(LEFT, TOP);
  text(`Planet Earth, ${moment()}`, width * 0.05, 40, width * 0.9);
  textAlign(LEFT, BOTTOM);
  textFont(rf);
  textSize(24);
  //
  const bottomMargin = 60;
  let str = `You have made me a better person and I am happy to continue growing every day, with you. On this small and beautiful planet lost in this infinite wonderful space I am grateful I found you...\n\n...I found you beautiful I found you exploding... \n\nI love you!\nYour Paolo`;
  text(str, width * 0.05, height - bottomMargin, width * 0.9);
  let bbox = rf.textBounds(str, 0, 0, 24);

  textFont(mf);
  textSize(32);
  text(
    timeString,
    width * 0.05,
    height - bottomMargin - bbox.h * 2,
    width * 0.9
  );

  cam.endHUD();
}
