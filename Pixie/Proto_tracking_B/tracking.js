
let polySynth;
let view;
let brAn;
let pnt;
let colors;
let capture;
let trackingData;
let debug = false;
let pos;
let n = 0;
let can;

let minutes = 2;
let seconds = 0;
let timer = 0;
let timerExpired = false;

let bubbles = [];
let trail = [];
let particles = [];

let star;

function preload() {
    star = loadImage("Star.png");
}


function setup() {
    can = createCanvas(document.querySelector("img").offsetWidth - 16, document.querySelector("img").offsetHeight - 16);
    can.parent("canvasContainer");
    capture = createCapture(VIDEO); //capture the webcam
    capture.position(0, 0); //move the capture to the top left
    capture.style("opacity", 0); // use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.

    // colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
    colors = new tracking.ColorTracker(["cyan"]);
    view = new cameraView();

    brAn = new brushAnalyzer();
    pnt = new pointer(createVector(width / 2, height / 2));
    tracking.track("#myVideo", colors); // start the tracking of the colors above on the camera in p5

    //start detecting the tracking
    colors.on("track", function (event) {
        //this happens each time the tracking happens
        trackingData = event.data; // break the trackingjs data into a global so we can access it with p5
    });

    pos = createVector(width / 2, height / 2);
    imageMode(CENTER)

    // const resX = width / 3;
    // const resY = height / 5;
    const maxBubbles = 8;
    for (let i = 0; i < maxBubbles; i++) {
        let angle = TAU / maxBubbles;
        bubbles.push(new reactiveElement(createVector(width / 2 + width / 3 * cos(angle * i + PI / 8), height / 5 * 2 + height / 4 * sin(angle * i + PI / 8)), width / 5, null));
    }



    polySynth = new p5.PolySynth();
}

function draw() {
    background("#E44427");


    view.viewTransform();
    // view.viewRender(capture);



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
    }


    for (let b of bubbles) {

        b.react(pnt.p);
        b.display();
    }


    noFill();
    stroke(250, 200, 20);
    strokeWeight(2);
    strokeJoin(ROUND)



    if (debug) {
        // ellipse(pos.x, pos.y, 30, 30);
    }



    // for (let p of particles) {
    //     p.display();
    //     p.update();
    //     p.destroy();
    // }

    if (n < bubbles.length) {

        pnt.move(bubbles[n].p);
        pnt.display();
    } else {
        fill(245);
        noStroke();
        flippedText("Great job!", width / 2, height / 5 * 4, 64);

    }



    let displayedTimer = '';




    if (!timerExpired) {
        // print("timer");
        if (millis() - timer >= 1000) {
            seconds--;
            timer = millis();
        }
        if (seconds <= 0 && minutes != 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes == 0 && seconds == 0) {
            timerExpired = true;
        }
        displayedTimer += nf(minutes, 2, 0) + ":" + nf(seconds, 2, 0);

    } else {
        displayedTimer = "Done!"
    }
    flippedText(displayedTimer, width / 2, height / 5 * 4, 64);


    // print("Activity = " + brAn.activityLevel(pos));

}


function flippedText(string, x, y, s) {
    push();
    translate(width, 0);
    scale(-1, 1);
    textAlign(CENTER, CENTER);
    textSize(s);
    text(string, x, y);
    pop();
}
class pointer {

    constructor(startingPosition) {
        this.p = startingPosition;
        this.ang = 0;
        this.particles = [];
        this.randomOffset = random(TAU);
    }



    move(target) {
        //print("moving");
        this.p.x = lerp(this.p.x, target.x + 30 * cos(this.ang), .07);
        this.p.y = lerp(this.p.y, target.y + 30 * sin(this.ang + this.randomOffset), .07);
        // print(this.p.x);
        this.ang += 0.05;
        this.d = 30;



    }
    display() {
        fill(245);
        for (let part of this.particles) {
            part.update();
            part.display();
            part.destroy(this.particles);
        }
        //print(this.particles.length);
        ellipse(this.p.x, this.p.y, this.d, this.d);
        //rect(this.p.x - this.d / 2, this.p.y + this.d / 2, this.d, this.d);
    }



}

class reactiveElement {
    constructor(pos, dim, sound) {
        this.p = pos;
        this.d = dim;
        this.s = sound;
        this.dOffset = 0;
        this.f = 0;
        this.timer = 0;
        this.timeLimit = 10000;
        this.active = true;
    }

    react(cursorPoint) {
        // print("cursor point: " + cursorPoint);
        if (cursorPoint) {

            if (this.isTouching(cursorPoint)) {


                if (this.timer < this.timeLimit) {
                    if (brAn.activityLevel(pos) > .005) {
                        for (let i = 0; i < 5; i++) {
                            pnt.particles.push(new particle(createVector(pnt.p.x, pnt.p.y)));

                        }

                        // print(this.timer);
                        this.dOffset += .2;
                        this.timer += deltaTime;
                        this.f++;

                    }

                } else if (this.active) {
                    this.active = false;
                    n++;
                    //print("N = " + n);
                }


            } else {
                this.dOffset = 0;
            }
        }



    }

    isTouching(pos) {
        //print("this is n. " + bubbles.indexOf(this) + " : " + p5.Vector.dist(pos, this.p) < this.d / 1.5);
        return p5.Vector.dist(pos, this.p) < this.d / 1.5;
    }

    display() {

        push();
        translate(this.p.x, this.p.y);

        if (this.active) {
            fill(this.f);
            noStroke();

            push();
            beginShape();
            for (let i = 0; i < 30; i++) {
                vertex();
            }
            pop();

            ellipse(0, 0, this.d + this.dOffset, this.d + this.dOffset);
        } else {

            rotate(.3 * sin(frameCount / 10));
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

function keyPressed() {

    if (key === '') {
        can.focus();

        n++;

        print(n)
    }

    if (key === 'd' || key === 'D') {
        debug = !debug;
    }
}

