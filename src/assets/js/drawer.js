let noiseScale = 100;

let particles = [];

let sz = 200;
let spd = 0.1;
let count = 0;

function setup() {
  let w = (window.innerWidth * 3) / 4;
  createCanvas(w, window.innerHeight).parent("#splash");
  background("white");
  text("[click & drag]", width / 4, height / 2);
}

function mousePressed() {
  if (count < 1) {
    background(255);
  }
  count++;
  let b = new Particle(mouseX, mouseY);
  particles.push(b);
}

function mouseDragged() {
  let b = new Particle(mouseX, mouseY);
  particles.push(b);
}

function draw() {
  //  background("#C477BA");

  if (count > 0) {
    background(255, 1);
  }

  for (i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.speed = spd;
    this.color = random(255);
    this.r = 1;
    this.alpha = 255;
  }
  move() {
    let angle =
      noise(this.pos.x / noiseScale, this.pos.y / noiseScale) * TWO_PI;
    this.dir.x = sin(angle);
    this.dir.y = cos(angle);
    this.dir.mult(this.speed);
    this.pos.add(this.dir);
  }
  display() {
    fill(this.color, this.alpha);
    circle(this.pos.x, this.pos.y, this.r);
  }
}
