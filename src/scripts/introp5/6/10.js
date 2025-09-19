let bg;
let fg;
let x = 200; // declare x w. starting point

let y = 200; // declare y. w. starting point

let step = 100; // maximum step distance
let numPoints = 1000;

function setup() {
  createCanvas(400, 400);
  noLoop();
  noFill();
  strokeWeight(2);

  bg = random(0, 100);
  fg = random(200, 255);
}

function draw() {
  background(bg);
  stroke(fg);

  beginShape();
  for (let i = 0; i < numPoints; i++) {
    x += random(-step, step);
    x = constrain(x, 0, width);
    y += random(-step, step);
    y = constrain(y, 0, height);

    curveVertex(x, y);
  }
  endShape();
}
