let can;
let d = 8;
let g;
let ran = [];
let f;
let str = "G";
let fs;
let ds;
let trX = (trY = 0);
let shift;
let shiftS;

//G
// let letterColor = "#AE05D9";
// let bgColor = "#00EC42";
// let letterColor = "#AAEC1D";
// let bgColor = "#D553F5";
//H
let letterColor = "#EBFF00";
let bgColor = "#0029BB";
//I
// let letterColor = "#1D1D1D";
// let bgColor = "#FF4D00";

let gs;
function preload() {
  f = loadFont("Hind-Bold.ttf");
  f2 = loadFont("UbuntuMono-Bold.ttf");
}

function setup() {
  if (windowWidth > windowHeight) {
    can = createCanvas(windowHeight, windowHeight);
  } else {
    can = createCanvas(windowWidth, windowWidth);
  }
  rectMode(CENTER);
  //imageMode(CENTER);
  //rectMode(CENTER);
  //colorMode(HSB, 360, 100, 100, 100);
  //blendMode(MULTIPLY);

  ds = createSlider(1, 14, d, 1);
  ds.position(width + 20, 20);

  shiftS = createSlider(1, 1000, 200, 0.1);
  shiftS.position(width + 20, 40);

  gs = createSlider(0.5, 20, 2, 0.01);
  gs.position(width + 20, 60);

  g = createGraphics(width * 2, height * 2);
  fs = g.width;
  // g.pixelDensity(1);
  g.textFont(f2);
  g.textAlign(CENTER, CENTER);
  g.textSize(fs);
  // g.background(255);
  g.clear();
  g.fill(letterColor);
  g.text(str, g.width / 2, g.height / 2 - g.height / 6);

  can.parent("canvasContainer");

  for (let i = 0; i < 10; i++) {
    ran.push(floor(random(50, 150)));
  }
  print(ran);
}

function draw() {
  clear();
  background(bgColor);
  translate(trX, trY);
  //randomSeed(123123);
  if (d % 2 == 0) {
    drawRectangle(
      0,
      0,
      width,
      height,
      floor(ds.value()),
      height / 2 +
        (height / 4) * sin(frameCount / ran[6]) * noise(frameCount / ran[7])
    );
    //text("EVEN",20,20);
  } else {
    drawRectangle(
      0,
      0,
      width,
      height,
      floor(ds.value()),
      width / 2 +
        (height / 4) * sin(frameCount / ran[6]) * noise(frameCount / ran[7])
    );
    //text("ODD",20,20);
  }
  shiftS.value(map(sin(frameCount / 50), -1, 1, 100, 400));
  //image(g, 0, 0, width, height);
}

function drawRectangle(x, y, w, h, depth, mid) {
  //strokeWeight(1);
  //noFill();
  let img;
  //fill(map(h, 0, height, 0, 600), map(w, 0, width, 0, 600), 100);
  let range = shiftS.value();

  if (depth == 1) {
    let b = alpha(
      g.get(
        floor(map(x, 0, width, 0, g.width)),
        floor(map(y, 0, height, 0, g.height))
      )
    );

    if (b > 80) {
      print(b);
      img = g.get(
        floor(map(x, 0, width, 0, g.width)) - range / 2,
        floor(map(y, 0, height, 0, g.height)) - range / 2,
        range,
        range
      );
      //tint(dist(x, y, mouseX, mouseY), 0, 255);
      image(img, x, y, w - 4, h - 4);
      noFill();
      stroke(1);
      //rect(x + w / 2, y + h / 2, w, h);
    } //else {
    // fill(
    //   lerpColor(
    //     color("#fdbb2d"),
    //     color("#FFFFFF"),
    //     map(x + y, 0, width * 2, 0, 1)
    //   )
    // );
    //fill("#828282");
    //point(x, y);
  }
  //stroke(30);
  //strokeWeight(1);
  // rect(
  //   x + w / 2,
  //   y + h / 2,
  //   w - (w / gs.value()) * noise(x / range, y / range, frameCount / 30),
  //   h - (h / gs.value()) * noise(x / range, y / range, frameCount / 30)
  // );
  // noFill();
  // stroke(1);
  // rect(x + w / 2, y + h / 2, w, h);
  //}

  noStroke();
  fill(21);
  //ellipse(x + w / 2, y + h / 2, 5, 5);

  if (depth > 1) {
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable

    //console.log("Depth = " + depth);
    depth = depth - 1;
    if (depth % 2 === 0) {
      //horizontal split

      //console.log("splitting horizontal");
      drawRectangle(
        x,
        y,
        mid,
        h,
        depth,
        h / 2 + (h / 4) * sin(frameCount / ran[1]) * noise(frameCount / ran[2])
      );
      drawRectangle(
        x + mid,
        y,
        w - mid,
        h,
        depth,
        h / 2 + (h / 4) * sin(frameCount / ran[3]) * noise(frameCount / ran[5])
      );
    } else {
      //vertical split

      //console.log("splitting veritcal");
      drawRectangle(
        x,
        y,
        w,
        mid,
        depth,
        w / 2 + (w / 4) * sin(frameCount / ran[2]) * noise(frameCount / ran[4])
      );
      drawRectangle(
        x,
        y + mid,
        w,
        h - mid,
        depth,
        w / 2 +
          (w / 4) * sin(frameCount / ran[5]) * noise(x / ran[9], y / ran[9])
      );
    }
  }

  //console.log("End of function");
}

function windowResized() {
  if (windowWidth > windowHeight) {
    resizeCanvas(windowHeight, windowHeight);
  } else {
    resizeCanvas(windowWidth, windowWidth);
  }
}

function keyPressed() {
  if (
    keyCode === SHIFT ||
    keyCode === OPTION ||
    keyCode === CONTROL ||
    key === "Meta"
  ) {
  } else {
    g.clear();
    g.fill(letterColor);
    g.text(key, g.width / 2, g.height / 2 - g.height / 6);
  }
}

function mouseDragged() {
  trX += mouseX - pmouseX;
  trY += mouseY - pmouseY;
}
