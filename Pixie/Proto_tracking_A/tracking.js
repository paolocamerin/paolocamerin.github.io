
let polySynth;
let view;
let brAn;
let colors;
let capture;
let trackingData;
let debug = true;
let pos;

let can;

let bubbles = [];
let trail = [];
let particles = [];

let star;

function preload() {
    star = loadImage("Star.png");
}


function setup() {
    can = createCanvas(document.querySelector("img").offsetWidth - 16, document.querySelector("img").offsetHeight - 16);
    can.parent();
    capture = createCapture(VIDEO); //capture the webcam
    capture.position(0, 0); //move the capture to the top left
    capture.style("opacity", 0); // use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.

    // colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
    colors = new tracking.ColorTracker(["cyan"]);
    view = new cameraView();

    brAn = new brushAnalyzer();

    tracking.track("#myVideo", colors); // start the tracking of the colors above on the camera in p5

    //start detecting the tracking
    colors.on("track", function (event) {
        //this happens each time the tracking happens
        trackingData = event.data; // break the trackingjs data into a global so we can access it with p5
    });

    pos = createVector(width / 2, height / 2);
    imageMode(CENTER)

    const resX = width / 3;
    const resY = height / 5;
    for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 4; y++) {
            bubbles.push(new reactiveElement(createVector((x + 1) * resX, (y + 1) * resY), width / 5, null));
        }

    }

    polySynth = new p5.PolySynth();
}

function draw() {
    background(200);


    view.viewTransform();
    view.viewRender(capture);



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
                map(mainPoint.x, 0, capture.width, width / 2 - view.captureTransform.w, width / 2 + view.captureTransform.w),
                map(mainPoint.y, capture.height / 2, capture.height - 100, 0, height)
            );
            pos.x = lerp(pos.x, tp.x, 0.4);
            pos.y = lerp(pos.y, tp.y, 0.4);
        }


        if (trackingData.length != 0) {

            noFill();
            stroke(245);
            strokeWeight(2);

            //rect(pos.x, pos.y, trackingData[0].width, trackingData[0].height, 8);

            trail.push(createVector(pos.x + trackingData[0].width / 2, pos.y + trackingData[0].height / 2));

        }

        //print(trackingData.length);

        if (trail.length > 30) {
            trail.shift();
        }


    } else {
        trail.shift();
    }




    for (let b of bubbles) {
        if (trail.length != 0) {
            b.react(createVector(trail[trail.length - 1].x, trail[trail.length - 1].y));
        }
        b.display();
    }


    noFill();
    stroke(250, 200, 20);
    strokeWeight(2);
    strokeJoin(ROUND)

    for (let n of trail) {
        const d = map(trail.indexOf(n), 0, trail.length, 0, 50);
        //print(d);
        ellipse(n.x, n.y, d, d);
    }

    if (debug) {
        ellipse(pos.x, pos.y, 30, 30);
    }

    print(brAn.activityLevel(pos));

    // for (let p of particles) {
    //     p.display();
    //     p.update();
    //     p.destroy();
    // }


}



class reactiveElement {
    constructor(pos, dim, sound) {
        this.p = pos;
        this.d = dim;
        this.s = sound;
        this.dOffset = 0;
        this.f = 0;
        this.timer = 0;
        this.timeLimit = 2000;
        this.active = true;
    }

    react(cursorPoint) {

        if (cursorPoint) {
            if (this.isTouching(cursorPoint)) {
                this.dOffset = random(20);

                if (this.timer < this.timeLimit) {
                    this.timer += deltaTime;
                } else {
                    this.active = false;
                }

                this.f++;
            } else {
                this.dOffset = 0;
            }
        }



    }

    isTouching(pos) {
        return p5.Vector.dist(pos, this.p) < this.d / 1.5;
    }

    display() {

        push();
        translate(this.p.x, this.p.y);

        if (this.active) {
            fill(this.f);
            ellipse(0, 0, this.d + this.dOffset, this.d + this.dOffset);
        } else {
            image(star, 0, 0, this.d, this.d);
        }

        pop();
    }


}





class brushAnalyzer {
    constructor() {
        this.lastActivity = createVector();
        this.screenDiagonal = sqrt((width * width) + (height * height));
    }

    activityLevel(cursorPoint) {
        let activity = 0;
        let distance = 0;

        if (this.lastActivity != undefined || this.lastActivity != null) {
            distance = p5.Vector.dist(cursorPoint, this.lastActivity);
            activity = map(distance, 0, this.screenDiagonal, 0, 1);
        }

        if (debug) {
            fill(245);
            noStroke();
            rect(width - 60, height - 60, 20, -activity * 1000);
        }

        this.lastActivity = createVector(cursorPoint.x, cursorPoint.y);
        return activity;
    }
}


class cameraView {
    constructor() {
        this.captureTransform = {};
    }

    viewTransform() {
        let aspectRatio = float(capture.width) / float(capture.height);
        // print("asp: " + aspectRatio.toString());
        let w = height * aspectRatio;

        this.captureTransform = {
            h: height,
            w: w,
        };

        translate(width, 0);
        scale(-1, 1);
    }

    viewRender(imageFeed) {
        image(imageFeed, width / 2, height / 2, this.captureTransform.w, this.captureTransform.h);
    }

}
