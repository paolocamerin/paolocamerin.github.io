var colors;
var capture;
var trackingData;
let particles = [];

let trail = [];
let pos;
let captureTransform;
let can;
function setup() {
    can = createCanvas(400, windowHeight * .95);
    can.parent();
    capture = createCapture(VIDEO); //capture the webcam
    capture.position(0, 0); //move the capture to the top left
    capture.style("opacity", 0); // use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.

    // colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
    colors = new tracking.ColorTracker(["cyan"]);

    tracking.track("#myVideo", colors); // start the tracking of the colors above on the camera in p5

    //start detecting the tracking
    colors.on("track", function (event) {
        //this happens each time the tracking happens
        trackingData = event.data; // break the trackingjs data into a global so we can access it with p5
    });

    pos = createVector(width / 2, height / 2);
    imageMode(CENTER)



}

function draw() {
    background(200);


    let aspectRatio = float(capture.width) / float(capture.height);
    // print("asp: " + aspectRatio.toString());
    let w = height * aspectRatio;
    // print("height: " + height);
    // print("width: " + w.toString());
    captureTransform = {
        h: height,
        w: w,
    };

    translate(width, 0);
    //then scale it by -1 in the x-axis
    //to flip the image
    scale(-1, 1);


    image(capture, width / 2, height / 2, captureTransform.w, captureTransform.h);
    //image(capture, width / 2, capture.height / 2, capture.width, capture.height);

    let mainPoint;

    // console.log(trackingData);
    if (trackingData && trackingData.length != 0) {
        //if there is tracking data to look at, then...
        for (var i = 0; i < trackingData.length; i++) {
            //loop through each of the detected colors
            // console.log( trackingData[i] )

            mainPoint = trackingData[0];

            let tp = createVector(
                map(mainPoint.x, 0, capture.width, width / 2 - captureTransform.w / 2, width / 2 + captureTransform.w / 2),
                map(mainPoint.y, 0, capture.height, 0, height)
            );

            pos.x = lerp(pos.x, tp.x, 0.4);

            pos.y = lerp(pos.y, tp.y, 0.4); //rect(trackingData[i].x,trackingData[i].y,trackingData[i].width,trackingData[i].height)
        }


        if (trackingData.length != 0) {

            noFill();
            stroke(245);
            strokeWeight(2);

            rect(pos.x, pos.y, trackingData[0].width, trackingData[0].height, 8);

            trail.push(createVector(pos.x, pos.y));

        }

        //print(trackingData.length);

        if (trail.length > 200) {
            trail.shift();
        }


    } else {
        trail.shift();
    }

    noFill();
    stroke(250, 200, 20);
    strokeWeight(6);
    strokeJoin(ROUND)
    beginShape();
    for (let n of trail) {
        vertex(n.x, n.y)
    }
    endShape();


    // for (let p of particles) {
    //     p.display();
    //     p.update();
    //     p.destroy();
    // }
}



class bubble {
    constructor(pos, dim, sound) {
        this.p = pos;
        this.d = dim;
        this.s = sound;
    }



    display() {
        push();
        translate(this.p.x, this.p.y);
        ellipse(0, 0, this.d, this.d);
        pop();
    }


}
class Particle {
    constructor(position) {
        this.p = position;
        this.g = createVector(0, 0.3);
        this.acc = createVector(0, 0);
        this.speed = createVector(0, 0);
        this.initialPush = p5.Vector.random2D().mult(30);
        this.spouned = true;
        this.d = random(20);
    }

    update() {
        if (this.spouned) {
            this.acc.add(this.initialPush);
            this.spouned = false;
        }
        this.acc.add(this.g);
        this.acc.setMag(0.7);
        this.speed.add(this.acc);
        this.speed.limit(15);
        this.p.add(this.speed);

        this.d -= 0.2;
        this.destroy();
    }
    destroy() {
        if (this.d <= 0) {
            particles.splice(particles.indexOf(this), 1);
        }
    }

    display() {
        push();
        translate(this.p.x, this.p.y);
        fill(245);
        ellipse(0, 0, this.d, this.d);
        pop();
    }
}
