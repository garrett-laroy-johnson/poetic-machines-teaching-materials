// built starting from Daniel Schiffman's Vector youtube series: https://www.youtube.com/watch?v=bKEaK7WNLzM
let walkers = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight * 2).parent("#splash");
  for (i = 0; i < 50; i++) {
    let b = new Walker(width / 2, height / 2);
    walkers.push(b);
  }
  strokeWeight(3);
  noFill();
}

function draw() {
  background(bg);
  //translate (width/2, height/2);
  if (bg == "white") {
    stroke("black");
  } else {
    stroke("weight");
  }
  for (a = 0; a < walkers.length; a++) {
    walkers[a].update();
    //walkers[a].update();
    walkers[a].edges();
  }
  beginShape();
  curveVertex(walkers[0].pos.x, walkers[0].pos.y);
  for (a = 0; a < walkers.length; a++) {
    curveVertex(walkers[a].pos.x, walkers[a].pos.y);
  }
  curveVertex(
    walkers[walkers.length - 1].pos.x,
    walkers[walkers.length - 2].pos.y
  );
  endShape();
}
class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(4));
  }
  update() {
    let mouse = createVector(mouseX, mouseY);
    //let ran = p5.Vector.random2D();
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.05);
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.pos.add(this.vel);
  }
  edges() {
    if (this.pos.x <= 0) {
      this.vel.mult(-1);
    }
    if (this.pos.x >= width) {
      this.vel.mult(-1);
    }
  }
  explode() {
    this.vel.mult(random(4));
  }
}

function mousePressed() {
  for (let walker of walkers) {
    walker.explode();
  }
}

function hookToProcessing() {
  remove();
  splash += 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
