// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

class Boid {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 0.5;
    this.maxSpeed = 6;
    this.trail = [];
    this.extMargin = 20;
    this.trailSize = random(15);
    
  }

  edges() {
    if (this.position.x > width+this.extMargin) {
      this.position.x = -this.extMargin;
    } else if (this.position.x < -this.extMargin) {
      this.position.x = width+this.extMargin;
    }
    if (this.position.y > height+this.extMargin) {
      this.position.y = -this.extMargin;
    } else if (this.position.y < -this.extMargin) {
      this.position.y = height+this.extMargin*2;
    }
  }

  align(boids) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separation(boids) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohesion(boids) {
    let perceptionRadius = 100;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(boids) {
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let separation = this.separation(boids);

    alignment.mult(alignSlider.value());
    cohesion.mult(cohesionSlider.value());
    separation.mult(separationSlider.value());

    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
    this.trail.push(createVector(this.position.x,this.position.y));
    if(this.trail.length>this.trailSize){
    this.trail.shift();
    }
  }

  show() {
    noFill();
    strokeWeight(8);
   
   // beginShape();
    for(let p of this.trail){
      
      let d;
      let i = this.trail.indexOf(p);
      
      if(i!=0){
        d = p5.Vector.dist(p,this.trail[i-1]);
        if(d<10){
          //curveVertex(p.x, p.y);
          stroke(lerpColor(color("#F82C82"),color("#DC0380"),map(i,0,this.trailSize,0,1)));
          line(p.x,p.y,this.trail[i-1].x,this.trail[i-1].y) 
        }else{
          return;
        }
      }
      
    }
  //endShape();
  }
}
