let can;

let ran = [];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let jsdate = new Date();
let dayOfWeek = jsdate.getDay();
let monthOfYear = jsdate.getMonth();

let timeP, dateP;

let styleFont, regularFont;



function preload() {


  styleFont = loadFont("/RecursiveExamples/Recursive/Staatliches-Regular.ttf");
  regularFont = loadFont("/RecursiveExamples/Recursive/CiscoSans-ExtraLight.ttf");
}


function setup() {


  can = createCanvas(windowWidth, windowHeight);
  can.parent("canvasContainer");
  //rectMode(CENTER);

  for (let i = 0; i < 10; i++) {
    ran.push(floor(random(100, 500)));
  }
  print(ran);
  frameRate(50);


  timeP = createElement("p", nf(hour(), 2, 0) + ":" + nf(minute(), 2, 0));
  dateP = createElement("p", days[dayOfWeek] + " " + day() + ' ' + months[month() - 1]);
  timeP.id("bold")
  setInterval(updateDate, 1000);

}

function draw() {
  background(220);
  //randomSeed(123123);

  drawRectangle(0, 0, width, height, 4, height / 2 + (height / 4) * sin(frameCount / ran[6]));
  //text(frameRate(),20,20);



}

function drawRectangle(x, y, w, h, depth, mid) {


  fill(245);
  stroke(51);
  strokeWeight(1);
  //noStroke();
  //noFill();

  fill(map(w + h, 0, width, 0, 300));

  rect(x, y, w, h);
  stroke(51);

  // line(x,y,x+w,y+h);
  // line(x+w,y,x,y+h);


  //text(depth, x+w/2,y+h/2);
  noStroke();
  fill(21);
  //ellipse(x+w/2,y+h/2,5,5);

  //ellipse(x,y,20,20);
  if (depth > 1) {
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable

    //console.log("Depth = " + depth);
    depth = depth - 1;
    if (depth % 2 === 0) {
      //horizontal split
      //console.log("splitting horizontal");
      drawRectangle(x, y, mid, h, depth, h / 2 + (h / 4) * sin(frameCount / ran[1]));
      drawRectangle(x + mid, y, w - mid, h, depth, h / 2 + (h / 4) * sin(frameCount / ran[3]));
    } else {
      //vertical split
      //console.log("splitting veritcal");
      drawRectangle(x, y, w, mid, depth, w / 2 + (w / 4) * sin(frameCount / ran[2]));
      drawRectangle(x, y + mid, w, h - mid, depth, w / 2 + (w / 4) * sin(frameCount / ran[5]));

    }




  }
  //console.log("End of function");

}


function updateDate() {
  //let div = select("#date");
  timeP.html(nf(hour(), 2, 0) + ":" + nf(minute(), 2, 0));
  timeP.position(40, height - 350);

  dateP.html(days[dayOfWeek] + " " + day() + ' ' + months[month() - 1]);
  dateP.position(40, height - 100);

}