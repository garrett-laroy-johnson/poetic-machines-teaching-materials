let size = 200;
let spacing = 2;
let drift = 0;
let driftStep = 10;
let drawMode = 0; // mode 0 is fill and mode 1 is stroke

function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(255);
  for (let y = size / 2; y < height; y += size) {
    for (let x = size / 2; x < width; x += size) {
      drift = 0;
      for (let s = 0; s < size; s += spacing) {
        let g = size / spacing;
        if (drawMode == 0) {
          fill(255 - (s / g) * 128);
        } else {
          stroke(255 - (s / g) * 128);
        }
        console.log(255 - (s / g) * 255);

        drift += random(-driftStep, driftStep);
        square(x + drift, y + drift, size - s);
      }
    }
  }
}
