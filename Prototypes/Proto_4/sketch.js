let serial;
let latestData = "waiting for data";

function setup() {
 createCanvas(windowHeight, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/tty.usbmodem14301');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}

function draw() {
 background(245);
 fill(0,0,0);
 text(latestData, 10, 10);
let r = width/3;
let v = floor(map(latestData,0,1023,1,30));
text(v,10,30);
noFill();
stroke(21);
strokeWeight(3)

push();
translate(width/2,height/2);
//ellipse(0,0,10,10);
beginShape();
 for(let i = 0; i < v; i++){

   if(v == 1){
    ellipse(0,0,10,10);

   
   }else if(v == 2){
     vertex(r*cos(TAU/v*(i-1)),r*sin(TAU/v*(i-1)));
     ellipse(r*cos(TAU/v*(i-1)),r*sin(TAU/v*(i-1)),10,10);
     
   }else{
    vertex(r*cos(TAU/v*(i+1)),r*sin(TAU/v*(i+1)));
    ellipse(r*cos(TAU/v*(i+1)),r*sin(TAU/v*(i+1)),10,10);
   }
   
  

 }
 endShape(CLOSE);
 pop();
 // Polling method
 /*
 if (serial.available() > 0) {
  let data = serial.read();
  ellipse(50,50,data,data);
 }
 */
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}

function windowResized(){
  resizeCanvas(windowWidth,windowWidth);
}