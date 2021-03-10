let serial;
let latestData = "waiting for data";
let dataflow =[];
let buffer =[];
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
 background(245);
noStroke();
fill(21);
 text(latestData, 10, 20);
 text(dataflow.length, 10, 40);
 text(buffer.length, 10, 60);
 buffer.push(latestData);

 if(buffer.length>30){
     let a = 0; 
     for(let b of buffer){
        a+=int(b);
     }
     
     dataflow.push(a/buffer.length);
     buffer.shift();
 }


 if(dataflow){
    noFill();
    stroke(21);
    strokeWeight(4);
    ellipse(width/2,height/2,dataflow[dataflow.length-1],dataflow[dataflow.length-1]);
    beginShape();
     for(let v = 0; v < dataflow.length; v++){
    vertex(width/dataflow.length*v,height-50-(dataflow[v]));
    
     }
     endShape(OPEN);
 }


 if(dataflow.length>60){
    dataflow.shift();
 }
}