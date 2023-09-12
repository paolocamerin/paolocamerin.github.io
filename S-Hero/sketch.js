let rotX = 0;
let rotY = 0;
let wheelOffset = 0;
let earthRadius;
let dataPoints = [];
let nodes = [];
let jsonIsLoaded = false;
let moveDataTo = "connection";
let camYPos = -1000;
let targetCamYPos = -600;
let canvas;
let circles;

function latLonToXYZ(radius, lat, lon) {
  // Convert latitude and longitude from degrees to radians
  let theta = radians(lat);
  let phi = radians(lon) + HALF_PI;
  // print("latAngle (theta) = " + theta + "   Real Lat = " + lat);
  // print("lonAngle (phi)   = " + phi + "   Real Lon = " + lon);
  let x = radius * cos(theta) * cos(phi);
  let y = -radius * sin(theta);
  let z = -radius * cos(theta) * sin(phi);
  // print(x, y, z);
  return createVector(x, y, z);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  earthRadius = 400;

  t = loadImage("./assets/8081_earthlights4k.jpg");
  coordinates = loadJSON("./assets/coordinates.json", () => {
    jsonIsLoaded = true;
    //print("Jseon is loaded!");
    //print(coordinates.coordinates.length);

    // const lat = radians(52.60985352862849) + PI;
    // const lon = radians(-0.47936085219706115) + HALF_PI;
    // print(lon, lat);
    // const x = earthRadius * sin(lat) * cos(lon);
    // const y = earthRadius * sin(lat) * sin(lon);
    // const z = earthRadius * cos(lat);
    // nodes.push(new node(x, y, z, 5));

    for (let i = 0; i < coordinates.coordinates.length; i++) {
      const v = latLonToXYZ(
        earthRadius,
        coordinates.coordinates[i].lat,
        coordinates.coordinates[i].lon
      );

      nodes.push(new node(v.x, v.y, v.z, random(2, 5)));
    }
    circles = [
      createVector(width / 4 - width / 2, 0, 0),
      createVector((width / 4) * 2 - width / 2, 0, 0),
      createVector((width / 4) * 3 - width / 2, 0, 0),
    ];
    for (let n of nodes) {
      n.findNear();

      //console.log(n.nearNodes);
    }

    for (let i = 0; i < 300; i++) {
      dataPoints.push(new dataPoint(0, 0, 0));
    }
  });
  cam = createCamera(0, 0, 0);
  perspective((PI / 180) * 60, width / height, 0.1, 10000);
  bezierDetail(32);
}

function draw() {
  //background(10, 10, 30);
  clear();
  //Create the sphere with mouse interactions
  const v = createVector(0, 0, 0);
  targetCamYPos = window.scrollY - 1000;
  camYPos = lerp(camYPos, targetCamYPos / 2, 0.1);
  cam.setPosition(0, camYPos, 800);
  cam.lookAt(-400, 200, -400);

  wheelOffset += 0.001;

  let rotYtarget = map(mouseX, 0, width, -0.2, 0.2) + PI * 0.8 + wheelOffset;
  let rotXtarget = map(mouseY, 0, height, -0.2, 0.2);

  rotX = lerp(rotX, rotXtarget, 0.1);
  rotY = lerp(rotY, rotYtarget, 0.1);
  rotateY(rotY);
  rotateX(rotX);

  for (let n of nodes) {
    n.display();
  }

  push();

  if (moveDataTo === "circles") {
    rotateY(-rotY);
    rotateX(-rotX);
    translate(-300, -400, 200);
  }

  for (let p of dataPoints) {
    p.move();
    p.display();
  }
  pop();
  texture(t);
  sphere(earthRadius, 32, 32);
}

class node {
  constructor(x, y, z, r) {
    this.p = createVector(x, y, z);
    this.r = r;
    this.nearNodes = [];
    this.connections = [];
  }

  display() {
    fill("#7B1BF9");
    noStroke();
    push();
    translate(this.p);
    sphere(this.r);
    pop();

    this.drawConnections();
  }
  drawConnections() {
    noFill();
    stroke("#480F93");
    strokeWeight(0.5);
    let index = 0;
    for (let c of this.connections) {
      if (index < 3) {
        bezier(
          c.anchor1.x,
          c.anchor1.y,
          c.anchor1.z,
          c.control1.x,
          c.control1.y,
          c.control1.z,
          c.control2.x,
          c.control2.y,
          c.control2.z,
          c.anchor2.x,
          c.anchor2.y,
          c.anchor2.z
        );
        index++;
      }
    }
  }

  findNear() {
    for (let n of nodes) {
      if (n != this) {
        let d = p5.Vector.dist(n.p, this.p);
        if (d < (PI * 2 * earthRadius) / 30) {
          this.nearNodes.push(n);
        }
      }
    }
    this.createConnections();
  }

  createConnections() {
    //console.log(this.nearNodes.length);
    for (let c of this.nearNodes) {
      const c1 = p5.Vector.sub(this.p, createVector(0, 0, 0)).mult(1.2);
      const c2 = p5.Vector.sub(c.p, createVector(0, 0, 0)).mult(1.2);

      const connObj = {
        anchor1: this.p,
        control1: c1,
        control2: c2,
        anchor2: c.p,
      };
      //print("c", c.connections);
      if (!c.connections.includes(connObj)) {
        this.connections.push(connObj);
      }
    }
  }
}

class dataPoint {
  constructor(x, y, z) {
    this.p = createVector(x, y, z);
    this.to = random(random(nodes).connections);
    this.incr = 0;
    this.randomIncrease = random(0.002, 0.0003);
    //console.log(this.to);

    this.orbitCircle = floor(random(3));
    this.randomThickness = random(0.4, 5);
    this.circleTarget = random(circles);
    //physics system variables
    this.acc = p5.Vector.random3D();
    this.speed = createVector(0, 0, 0);
  }
  display() {
    push();
    translate(this.p.x, this.p.y, this.p.z);

    strokeWeight(this.randomThickness);
    stroke(255);
    point(0, 0);
    pop();
  }
  move() {
    switch (moveDataTo) {
      case "connection":
        const b = this.to;
        // console.log("b", b);
        if (b != undefined) {
          this.p = this.bezierPoint3D(
            b.anchor1,
            b.control1,
            b.control2,
            b.anchor2,
            this.incr % 1
          );
          this.speed.mult(0);
        }

        this.incr += this.randomIncrease;
        break;
      case "circles":
        const dir = p5.Vector.sub(this.circleTarget, this.p);
        dir.setMag(1);

        const dispRadius = 5;

        const x = map(noise(this.p.x, this.p.y, this.p.z), 0, 1, -TAU, TAU);
        const y = map(noise(this.p.y, this.p.x, this.p.z), 0, 1, -TAU, TAU);
        const z = map(noise(this.p.z, this.p.y, this.p.x), 0, 1, -TAU, TAU);
        const noiseDisplacementVector = createVector(x, y, z);
        noiseDisplacementVector.setMag(1);

        this.acc.add(dir);
        this.acc.add(noiseDisplacementVector);
        this.speed.add(this.acc);
        if (this.speed.mag() > 10) {
          this.speed.setMag(10);
        }
        this.p.add(this.speed);

        this.acc.mult(0);
        // this.acc.add(noiseDisplacementVector);

        break;
    }
  }

  bezierPoint3D(p0, p1, p2, p3, t) {
    // De Casteljau's algorithm for cubic Bezier curves in 3D
    const u = 1 - t;
    const u2 = u * u;
    const u3 = u2 * u;
    const t2 = t * t;
    const t3 = t2 * t;

    const x = u3 * p0.x + 3 * u2 * t * p1.x + 3 * u * t2 * p2.x + t3 * p3.x;
    const y = u3 * p0.y + 3 * u2 * t * p1.y + 3 * u * t2 * p2.y + t3 * p3.y;
    const z = u3 * p0.z + 3 * u2 * t * p1.z + 3 * u * t2 * p2.z + t3 * p3.z;

    return createVector(x, y, z);
  }
}

function keyPressed() {
  if (key === "m") {
    moveDataTo === "connection"
      ? (moveDataTo = "circles")
      : (moveDataTo = "connection");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
