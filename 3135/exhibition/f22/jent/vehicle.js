class Vehicle {
  constructor(x, y) {
    //this.pos = createVector(random(width), random(height));
    this.pos = createVector(x,y);
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();

    this.r = 6;
    this.maxspeed = 10;
    this.maxforce = 0.9;
    this.hue = 0;
  }

  behaviors(hand) {
    let arrive = this.arrive(this.target);
    let flee = this.flee(hand);

    arrive.mult(1);
    flee.mult(5);
    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0); //must put this. it's very important
  }

  exhi() {
   push();
    //stroke(hue,100,100,100);
    noStroke();
    fill(0,255,0);
    //strokeWeight(8);
    ellipse(this.pos.x, this.pos.y,8);
    //hue++;
    pop();
    
  }
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer; //why return? grammar?
    } else {
      return createVector(0, 0);
    }
  }
}
