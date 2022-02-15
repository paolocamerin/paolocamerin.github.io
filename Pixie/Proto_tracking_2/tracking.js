
let polySynth;
let button;
let state = "timer";
let attackTime = 0.001;
let decayTime = 0.2;

let susPercent = 0.3;
let releaseTime = 0.4;
let stick;
let trackingColors;
let colorPalette = ["#B7B4C7", "#6E2C25", "#376250", "#6B94AF", "#BC7A61", "#CC8548", "#626787", "#365676"];
let trackingData;
let soundtrack;
let particles = [];
let debug = false;

//Timer variables 
let timerState = "ready"
let timerStarted = false;
let timer = 0;
let seconds;
let minutes;
let overallSeconds = 0;
let maxTimer = 5;

let pos;
let captureTransform;
let can;
let trail = [];
let keys = [];
let sounds = [];
let timerExpired = false;

let maxKeys = 6;
let timerBubbles = [];
let notes = ["B", "C#", "E", "F", "F#", "G#"];

let backgroundColor;
let bubblesColor;
let keysColor;
let myFont;

function preload() {

    stick = loadImage("/Pixie/Proto_tracking/stick_3.png");

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
    can.parent();


    textFont(myFont);
    button = createButton("Start");
    button.parent("canvasContainer");
    button.mousePressed(start);

    capture = createCapture(VIDEO); //capture the webcam
    capture.position(0, 0); //move the capture to the top left
    capture.style("opacity", 0); // use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.

    // colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
    trackingColors = new tracking.ColorTracker(["cyan"]);

    tracking.track("#myVideo", trackingColors); // start the tracking of the colors above on the camera in p5

    //start detecting the tracking
    trackingColors.on("track", function (event) {
        //this happens each time the tracking happens
        trackingData = event.data; // break the trackingjs data into a global so we can access it with p5
    });

    pos = createVector(width / 2, height / 2);
    imageMode(CENTER)
    colorMode(HSB);
    const resX = width / 3;
    const resY = height / (maxKeys * 1.5);

    backgroundColor = "#E5F5F9";
    bubblesColor = "#B5E5E0";
    keysColor = "#57B9AD";




    for (let i = 0; i < notes.length; i++) {
        keys.push(new reactiveElement(createVector(24, resY * (i + 1) * 1.3), notes[i] + "4", random(colorPalette)));
    }

    polySynth = new p5.PolySynth();
    polySynth.setADSR(attackTime, decayTime, susPercent, releaseTime);


    seconds = maxTimer % 60;
    minutes = (maxTimer - seconds) / 60

    print("minutes = " + minutes);
    print("seconds = " + seconds);


    let startSize = 140;
    let maxBubbles = 300;
    let trials = 0;

    while (timerBubbles.length < maxBubbles) {

        let newPos = createVector(random(width), random(height));
        let overlapping = false;

        for (let b of timerBubbles) {
            let distance = p5.Vector.dist(b.p, newPos);
            // print("Distance = " + distance);
            // print("Size = " + startSize);
            if (distance < b.d / 2 + startSize / 2) {
                overlapping = true;
            }
        }

        if (!overlapping) {


            timerBubbles.push({
                p: newPos,
                d: startSize
            });

            print(map(timerBubbles.length, 0, maxBubbles, 0, 100));
        } else {
            if (trials < 50) {
                trials++;
            } else {
                startSize = startSize * .99;
                trials = 0;
            }

        }

    }

    print(timerBubbles);

    userStartAudio();
}

function draw() {

    background(backgroundColor);


    push();

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


    //image(capture, width / 2, height / 2, captureTransform.w, captureTransform.h);
    //image(capture, width / 2, capture.height / 2, capture.width, capture.height);
    pop();


    switch (state) {
        case "reward":

            let mainPoint;

            // console.log(trackingData);
            if (trackingData && trackingData.length != 0) {
                //if there is tracking data to look at, then...
                for (var i = 0; i < trackingData.length; i++) {
                    //loop through each of the detected colors
                    // console.log( trackingData[i] )

                    mainPoint = trackingData[0];

                    let tp = createVector(
                        map(mainPoint.x, capture.width, 0, -width / 2 - captureTransform.w, width / 2 + captureTransform.w),
                        map(mainPoint.y, capture.height / 2, capture.height - 100, 0, height)
                    );

                    pos.x = lerp(pos.x, tp.x, 0.4);

                    pos.y = lerp(pos.y, tp.y, 0.4); //rect(trackingData[i].x,trackingData[i].y,trackingData[i].width,trackingData[i].height)
                }


                if (trackingData.length != 0) {

                    noFill();
                    stroke(245);
                    strokeWeight(2);
                    if (debug) {
                        rect(pos.x, pos.y, trackingData[0].width, trackingData[0].height, 8);
                    }


                    trail.push(createVector(pos.x + trackingData[0].width / 2, pos.y + trackingData[0].height / 2));

                }

                //print(trackingData.length);

                if (trail.length > 20) {
                    trail.shift();
                }


            } else {
                trail.shift();
            }
            if (debug) {

                noFill();
                stroke(250, 200, 20);
                strokeWeight(6);
                strokeJoin(ROUND)
                beginShape();
                for (let n of trail) {
                    vertex(n.x, n.y)
                }
                endShape();

            }

            //Draw the keys 
            for (let k of keys) {
                if (trail.length != 0) {
                    k.react(createVector(trail[trail.length - 1].x, trail[trail.length - 1].y));
                }

                k.display();
            }


            //Draw the stick
            push();
            translate(pos.x, pos.y);
            rotate(-PI / 4);
            image(stick, 0, stick.height / 4, stick.width / 2, stick.height / 2);

            pop();

            // for (let p of particles) {
            //     p.display();
            //     p.update();
            //     p.destroy();
            // }


            break;

        case "timer":



            randomSeed(37678);
            fill(bubblesColor);
            for (let b of timerBubbles) {
                // if (map(timerBubbles.indexOf(b), 0, timerBubbles.length - 1, 120, 0) > overallSeconds) {
                noStroke();
                ellipse(b.p.x, b.p.y, b.d, b.d);
                // }
            }

            let txtSize;
            let displayedTimer = '';
            fill(245, .8);
            rect(0, height / 4 * 3, width, height / 4);

            if (timerExpired) {
                timerState = "done"
            }
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
                        overallSeconds++;
                        timer = millis();

                        sounds[second() % 4].play();
                        randomSeed(second());
                        timerBubbles.splice(floor(random(timerBubbles.length - 1)), floor(timerBubbles.length / (maxTimer - overallSeconds)));
                        print(timerBubbles.length);
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
                    soundTrack.pause();
                    state = "reward"
                    button.hide();

                    break;


            }

            fill("#35C2D6");
            flippedText(displayedTimer, width / 2, height / 5 * 4, txtSize);


            break;
    }







}



class reactiveElement {
    constructor(pos, sound, col) {
        this.p = pos;
        this.d = 0;
        this.s = sound;
        this.c = hue;
        this.w = width / 3 * 2;
        this.h = height / (maxKeys * 2);
        this.dOffset = 0;
        this.c = col
        this.hasPlayed = false;
    }

    react(cursorPoint) {

        if (cursorPoint) {

            if (debug) {
                ellipse(cursorPoint.x, cursorPoint.y, 20, 20);
                ellipse(this.p.x, this.p.y, 50, 50);
            }

            let cursorEntersKey = cursorPoint.x > this.p.x && cursorPoint.x < this.p.x + this.w && cursorPoint.y > this.p.y && cursorPoint.y < this.p.y + this.h;
            if (cursorEntersKey) {
                this.dOffset = random(20);

                print("playing sound");

                // notes can overlap with each other
                // if (frameCount % 3 === 0) {
                //     polySynth.noteAttack(this.s, vel, 0, dur);
                // }
                if (!polySynth.isPlaying) {

                    // note duration (in seconds)
                    let dur = .1;

                    // time from now (in seconds)
                    let time = 0;

                    // velocity (volume, from 0 to 1)
                    let vel = .5;
                    if (!this.hasPlayed) {
                        polySynth.noteAttack(this.s, 0, 0);
                        polySynth.noteRelease(this.s, .2, 0);
                        this.hasPlayed = true;
                    }


                }


                this.d = random(10);

            } else {
                this.hasPlayed = false;
                this.dOffset = 0;
                this.d = 0;
            }
        }



    }

    display() {
        push();
        translate(this.p.x, this.p.y - this.d / 2);
        noStroke();
        fill(this.c);
        //noFill();
        //stroke(0);
        rect(0, 0, this.w, this.h + this.d, 10);
        textAlign(CENTER, CENTER);
        textSize(18);
        fill(backgroundColor);
        text(this.s, this.w - 20, this.h / 2);
        pop();
    }


}










function flippedText(string, x, y, s) {
    push();
    // translate(width, 0);
    // scale(-1, 1);
    textAlign(CENTER, CENTER);
    textSize(s);
    text(string, x, y);
    pop();
}


function start() {

    if (!timerStarted) {
        if (!soundTrack.isPlaying()) {
            soundTrack.play(0, 1, .3);
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


function keyPressed() {
    if (key === 'd' || key === 'D') {
        debug = !debug;
    }
    if (key === "s") {
        soundTrack.pause();
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



