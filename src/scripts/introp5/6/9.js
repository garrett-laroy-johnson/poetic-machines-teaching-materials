let size = 4; // size of circle
let r = 128; // right in the middle 0-255
let step = 60; // random step size;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(0);
  for (let x = size / 2; x < width; x += size) {
    for (let y = size / 2; y < height; y += size) {
      r += random(-step, step);
      //code the keeps this within 0 and 255
      r = constrain(r, 0, 255);
      // r = random(255);
      fill(r);
      circle(x, y, size);
      // console.log(r);
    }
  }
}
