let imgs = [];
let particles = [];
let main;
let imageSize = 800;
let rotationSpeed = 0.1;
let maxParticles = 50;
let cam;
let photomode = false;
let constraints;
let wheel;
let debug = false;
let scene = 0;
const maxScene = 3;
let sizeSlider;
let partSlider;
let f;
let minutes = 2;

let data;

function preload() {
  for (let i = 1; i < 4; i++) {}

  main = loadImage("Main.png");
  imgs.push(loadImage("1.png"));
  imgs.push(loadImage("2.png"));
  imgs.push(loadImage("3.png"));
  imgs.push(loadImage("4.png"));
  imgs.push(loadImage("5.png"));
  imgs.push(loadImage("6.png"));

  data = loadJSON("names.json", printNames, loadingError, String);
  print(imgs);

  f = loadFont("Itim-Regular.ttf");
}

function printNames() {
  print("Names loaded, names are: " + data.names);
  print("Names loaded, names are: " + data.drinks);
}

function cycleScenes() {
  switch (scene) {
    case 0:
      scene++;
      console.log("Going to scene 2");
      wheel.isSpinning = true;
      wheel.stopAngle = random(TAU);
      wheel.spin += wheel.spinAcc;
      wheel.rTarget = height - 200;
      break;

    case 1:
      scene++;
      wheel.isSpinning = true;
      wheel.stopAngle = random(TAU);
      wheel.spin += wheel.spinAcc;
      console.log("Going to scene 3");
      break;

    case 2:
      setTimeout(() => {
        scene = 0;
        wheel.selectedName = "????????";
        wheel.selectedDrink = "????????";
        console.log("Reset name and drinks, going to scene 1");
      }, 1000);

      wheel.rTarget = 0;
      break;
  }
}

function loadingError() {
  print("Something went wrong with loading some files");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(RIGHT, CENTER);
  textSize(16);
  textFont(f);
  setInterval(cycleScenes, 1000 * 60 * minutes);

  wheel = new Wheel(width / 2, height / 2, height - 200);
  constraints = {
    video: {
      mandatory: {
        minWidth: 1280,
        minHeight: 720,
      },
      optional: [{ maxFrameRate: 30 }],
    },
    audio: false,
  };

  if (photomode) {
    initializeCam();
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(
      new Particle(
        createVector(width / 2, height / 2),
        imgs[floor(random(imgs.length))]
      )
    );
  }

  sizeSlider = createSlider(200, 1000, 600, 5);
  sizeSlider.position(100, height - 100);
  partSlider = createSlider(50, 300, 150, 1);
  partSlider.position(100, height - 200);
}

function draw() {
  background("#7AB1DF");

  //Particle system
  for (let p of particles) {
    p.display();
    p.move();
    p.reset();
  }

  if (particles.length > maxParticles) {
    particles.shift();
  }

  switch (scene) {
    //Default scene
    case 0:
      if (photomode && cam) {
        push();
        translate(width / 2, height / 2);
        scale(-1, 1);
        image(cam, 0, 0, width, height);
        pop();

        image(main, width / 2, height - imageSize * 0.45, imageSize, imageSize);
      }

      break;

    //Spinning wheel for names
    case 1:
      wheel.display("names", data.names);
      wheel.update();
      break;

    case 2:
      wheel.display("drinks", data.drinks);
      wheel.update();
      break;
  }

  if (!photomode) {
    image(
      main,
      width / 2,
      height / 2,
      imageSize + 50 * sin(frameCount / 50),
      imageSize + 50 * sin(frameCount / 50)
    );
  }

  //fill(21);
  // if (photomode) {
  //   image(main, width / 2, height - imageSize * 0.45, imageSize, imageSize);
  // } else {
  //   image(main, width / 2, height / 2, imageSize, imageSize);
  // }

  //background(245);

  //rect(width/2,height/2,300,300);

  if (debug) {
    sizeSlider.show();
    partSlider.show();
  } else {
    sizeSlider.hide();
    partSlider.hide();
  }
  imageSize = sizeSlider.value();
  maxParticles = partSlider.value();
}

function mouseDragged() {
  particles.push(
    new Particle(createVector(mouseX, mouseY), imgs[floor(random(imgs.length))])
  );
}

function keyPressed() {
  if (key === " " && photomode) {
    save(hour() + minute() + second() + millis() + ".jpg");
  }

  if (key === "p" || key === "P") {
    photomode = !photomode;
    if (!cam) {
      initializeCam();
    }
  }

  if (key === "f" || key === "F") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (key === "d" || key === "D") {
    debug = !debug;
  }

  if (key == "s" || key == "S") {
    cycleScenes();
  }

  if (key == "r" || key == "R") {
    cycleScenes();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function initializeCam() {
  cam = createCapture(constraints, function (stream) {
    console.log(stream);
  });
  cam.hide();
}
