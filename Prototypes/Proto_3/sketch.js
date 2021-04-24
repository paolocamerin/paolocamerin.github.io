let video;
let poseNet;
let poses;
let scaleFactor = 3;
let col; 
let bw = 245;
let thickness = 5;
let mode = 2; 
let d = 50;
let totalCircleNumber = 40;
let debug = false;
let g;
let ell = true;

let musicOn = false;
// When the model is loaded




function setup(){
   createCanvas(windowWidth/3*2, windowHeight/3*2); 
    video = createCapture(VIDEO);
    video.size(width/scaleFactor, height/scaleFactor);

    resizeCanvas(windowHeight*video.width/video.height,windowHeight);

    //video.hide();
    g = createGraphics(width,height);
    poseNet  = ml5.poseNet(video,{
        architecture: 'MobileNetV1',
        imageScaleFactor: 0.3,
        outputStride: 16,
        flipHorizontal: false,
        minConfidence: 0.5,
        maxPoseDetections: 1,
        scoreThreshold: 0.5,
        nmsRadius: 20,
        detectionType: 'multiple',
        inputResolution: 513,
        multiplier: 0.75,
        quantBytes: 2,
      }, modelLoaded);
   
  // Listen to new 'pose' events
poseNet.on('pose', (results) => {
    
    poses = results;
    
  });


  col = color(250,80,20);
}

function draw(){
background(255,180,20);

g.strokeWeight(thickness);

if(poses){
//print(poses);

//drawKeypoints();
//g.fill(21,10);
//g.rect(0,0,width,height);
g.clear();
drawSkeleton(mode);

image(g,0,0,width,height);


//image(video,0,0,width,height);
}

//pose = poseNet.singlePose(video);

}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
// Loop through all the poses detected
for (let i = 0; i < poses.length; i += 1) {
  // For each pose detected, loop through all the keypoints
  const pose = poses[i].pose;
  for (let j = 0; j < pose.keypoints.length; j += 1) {
    // A keypoint is an object describing a body part (like rightArm or leftShoulder)
    const keypoint = pose.keypoints[j];
    // Only draw an ellipse is the pose probability is bigger than 0.2
    if (keypoint.score > 0.3) {
      fill(255, 0, 0);
      noStroke();
      ellipse(keypoint.position.x*scaleFactor, keypoint.position.y*scaleFactor, 10, 10);
    }
  }
}
}



// A function to draw the skeletons
function drawSkeleton(num) {
  

  switch (num){
    case 0:
      break;
  case 1:
  
    for (let i = 0; i < poses.length; i += 1) {
     print(poses[0]); 
      const skeleton = poses[i].skeleton;
      const pose = poses[i].pose;
      
      g.stroke(col);
      g.noFill();
      g.ellipse(pose.nose.x*scaleFactor,pose.nose.y*scaleFactor+50,d,d*1.5);
      // For every skeleton, loop through all body connections
      for (let j = 0; j < skeleton.length; j += 1) {
        
        const partA = skeleton[j][0];
        const partB = skeleton[j][1];

        if(match(partA.part,"Shoulder")=="Shoulder" && match(partB.part,"Shoulder")=="Shoulder"){
          d = dist(partA.position.x*scaleFactor, partA.position.y*scaleFactor, partB.position.x*scaleFactor, partB.position.y*scaleFactor)/2;
          d = constrain(d, 100, 500);
        }
        
        g.stroke(bw,100);
     
        g.line(partA.position.x*scaleFactor, partA.position.y*scaleFactor, partB.position.x*scaleFactor, partB.position.y*scaleFactor);
        
        if(debug){
          noStroke();
          fill(bw);
          text(partA.part,partA.position.x*scaleFactor, partA.position.y*scaleFactor);
          text(partB.part,partB.position.x*scaleFactor, partB.position.y*scaleFactor);
        }
      }
    }
  break;

  case 2: 

  g.push();
  g.translate(g.width/2,g.height/2);
  g.rotate(frameCount/1000);
  let dis = 50; 
  g.stroke("#7515F5");
  g.fill("#FF3415");
  for(let i = 0; i < 15; i ++){
    if(musicOn){

    }
    //g.ellipse(dis*i,0,200,200);  
  }
  g.pop();

    for (let i = 0; i < poses.length; i += 1) {
      
      const skeleton = poses[i].skeleton;
      const pose = poses[i].pose;

    g.fill(200);
    g.textSize(24);
    g.text(totalCircleNumber,20,20);
    g.text(skeleton.length,20,50);


      g.stroke(col);
      g.noFill();
      g.ellipse(pose.nose.x*scaleFactor,pose.nose.y*scaleFactor+50,d,d*1.5);
      // For every skeleton, loop through all body connections
      for (let j = 0; j < skeleton.length; j += 1) {
        //print(skeleton[j]);
        const partA = skeleton[j][0];
        const partB = skeleton[j][1];
        let aX = partA.position.x*scaleFactor;
        let aY = partA.position.y*scaleFactor;
        let bX = partB.position.x*scaleFactor;
        let bY = partB.position.y*scaleFactor;
        g.stroke(col);
       
       
          
          for(let n = 0; n < totalCircleNumber/skeleton.length; n++){
            let f =  map(n,0,totalCircleNumber/skeleton.length,.2,.8);
            if(ell){
              g.ellipse(lerp(aX,bX,f),lerp(aY,bY,f),100,100);
            }else{
              g.push();
              g.translate(lerp(aX,bX,f),lerp(aY,bY,f));
              g.beginShape();
              for(let v = 0; v < 3; v++){
                vertex(50*cos(map(v,0,3,0,TAU)),50*sin(map(v,0,3,0,TAU)));
              }
              g.endShape(CLOSE);
              g.pop();
            }
            
          }
        
          g.stroke(bw,100);
        g.line(aX,aY,bX,bY);

      }
    }

    
  break;


  }
// Loop through all the skeletons detected


}




function modelLoaded() {
    console.log('Model Loaded!');
  }



 
