let serial;
let latestData = "waiting for data";
let dataflow =[];
function setup() {
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/tty.usbmodem14101');

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
 background(255,255,255);
noStroke();
fill(21);
 text(latestData, 10, 20);
 text(dataflow.length, 10, 40);
 dataflow.push(latestData);

 
 noFill();
stroke(21);
strokeWeight(4);
beginShape();
 for(let v = 0; v < dataflow.length; v++){
vertex(width/dataflow.length*v,height/3*2-(dataflow[v]));

 }
 endShape(OPEN);

 if(dataflow.length>100){
    dataflow.shift();
 }
}