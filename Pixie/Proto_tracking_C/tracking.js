
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
let timerState = "ready"
let can;
let colorPalette = ["#B7B4C7", "#6E2C25", "#376250", "#6B94AF", "#BC7A61", "#CC8548", "#626787", "#365676"];

let timerStarted = false;
let minutes = 2;
let seconds = 0;
let timer = 0;
let timerExpired = false;

let bubbles = [];
let trail = [];
let particles = [];

let star;
let myFont;

let sounds = [];
let soundTrack;

let backgroundColor = "#DBE6E4";

function preload() {

    star = loadImage("Star.png");

    myFont = loadFont("/Pixie/Proto_tracking/Assets/CourierPrime-Regular.ttf");

    soundFormats('wav');
    sounds.push(loadSound('/Pixie/Proto_tracking_C/Assets/pop_1'));
    sounds.push(loadSound('/Pixie/Proto_tracking_C/Assets/pop_2'));
    sounds.push(loadSound('/Pixie/Proto_tracking_C/Assets/pop_3'));
    sounds.push(loadSound('/Pixie/Proto_tracking_C/Assets/pop_4'));
    sounds.push(loadSound('/Pixie/Proto_tracking_C/Assets/inflate'));
    soundTrack = loadSound('/Pixie/Proto_tracking_C/Assets/soundtrack');
}


function setup() {
    can = createCanvas(document.querySelector("img").offsetWidth - 16, document.querySelector("img").offsetHeight - 16);
    can.parent("canvasContainer");

    textFont(myFont);

    button = createButton("Start");
    button.parent("canvasContainer");
    button.mousePressed(start);

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
        bubbles.push(new reactiveElement(createVector(width / 2 + width / 3 * cos(angle * i + PI / 8), height / 5 * 2 + height / 4 * sin(angle * i + PI / 8)), 70, null, "#378076"));
    }



    //polySynth = new p5.PolySynth();


}

function draw() {
    background(backgroundColor);


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
        fill("#378076");
        noStroke();
        flippedText("Great job!", width / 2, height / 5 * 4, 64);

    }


    let txtSize;
    let displayedTimer = '';

    if (timerExpired) {
        timerState = "done"
    }
    noStroke();
    switch (timerState) {
        //ready?
        case "ready":
            txtSize = 64;

            displayedTimer = "Ready?"
            break;
        //countdown
        case "countDown":
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
            txtSize = 64;
            displayedTimer += nf(minutes, 2, 0) + ":" + nf(seconds, 2, 0);

            break;
        //pause
        case "paused":
            txtSize = 48;
            displayedTimer += nf(minutes, 2, 0) + ":" + nf(seconds, 2, 0);
            break;
        //over
        case "done":
            txtSize = 64;
            displayedTimer = "Done!"
            break;


    }

    fill("#378076");
    flippedText(displayedTimer, width / 2, height / 5 * 4, txtSize);


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
    constructor(pos, dim, sound, col) {
        this.p = pos;
        this.d = dim;
        this.s = sound;
        this.bubbleRes = 100;
        this.phase = random(123);
        this.phaseIncr = random(.01, .001);
        this.dOffset = 0;
        this.c = col;
        this.timer = 0;
        this.timeLimit = 10000;
        this.active = true;
        this.excitment = 0;

    }

    react(cursorPoint) {
        // print("cursor point: " + cursorPoint);
        if (cursorPoint) {

            if (this.isTouching(cursorPoint) && timerState == "countDown") {

                if (this.timer < this.timeLimit) {
                    if (brAn.activityLevel(pos) > .005) {
                        for (let i = 0; i < 5; i++) {
                            pnt.particles.push(new particle(createVector(pnt.p.x, pnt.p.y)));

                        }

                        // print(this.timer);
                        this.dOffset += .1;

                        this.timer += deltaTime;


                    }

                } else if (this.active) {
                    this.active = false;
                    sounds[int(random(sounds.length - 2))].play();
                    n++;
                    //print("N = " + n);
                }


            } else if (timerState != "paused") {
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
            // print(this.c);
            fill(this.c);
            noStroke();


            beginShape();


            for (let i = 0; i < this.bubbleRes; i++) {
                const a = TAU / this.bubbleRes;
                if (this.isTouching(pnt.p)) {
                    this.excitment = lerp(this.excitment, map(brAn.activity, 0, 100, 1, 10), .1);
                }

                let xoff = map(cos(a * i + this.phase) / 2, -1, 1, 0, this.excitment);
                let yoff = map(sin(a * i - this.phase) / 2, -1, 1, 0, this.excitment);
                const r = map(noise(xoff, yoff, this.phase), 0, 1, 20, 40 + this.excitment * 10) + this.dOffset;
                const x = r * cos(a * i);
                const y = r * sin(a * i);
                let vec = createVector(x, y);
                //vec.mult(noise(cos(x + this.phase) / 5, sin(y - this.phase) / 5, brAn.activityLevel(pos)) + 1);
                const bumpScale = 30;
                //vertex(vec.x + bumpScale * noise(a * i, this.phase), y + bumpScale * noise(a * i, this.phase));
                vertex(vec.x, vec.y);

            }
            endShape(CLOSE);
            this.phase += this.phaseIncr;

            // ellipse(0, 0, this.d + this.dOffset, this.d + this.dOffset);
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
        this.activity = 0;
    }

    activityLevel(cursorPoint) {

        let distance = 0;

        if (this.lastActivity != undefined || this.lastActivity != null) {
            distance = p5.Vector.dist(cursorPoint, this.lastActivity);
            this.activity = map(distance, 0, this.screenDiagonal, 0, 1);
        }

        if (debug) {
            fill(245);
            noStroke();
            rect(width - 60, height - 60, 20, -this.activity * 1000);
        }

        this.lastActivity = createVector(cursorPoint.x, cursorPoint.y);
        return this.activity;
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

        // print(n)
    }

    if (key === 'd' || key === 'D') {
        debug = !debug;
        sounds[int(random(sounds.length - 1))].play();
        sounds[sounds.length - 1].play();
    }
}



function start() {



    if (!timerStarted) {
        if (!soundTrack.isPlaying()) {
            soundTrack.play();
        }
        timerState = "countDown";
        button.html("Pause");
        timerStarted = true;
    } else {
        timerState = "paused";
        button.html("Resume");
        soundTrack.pause();
        timerStarted = false;
    }


}