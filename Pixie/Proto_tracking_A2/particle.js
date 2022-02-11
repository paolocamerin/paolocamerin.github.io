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


