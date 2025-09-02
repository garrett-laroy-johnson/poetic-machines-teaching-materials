// declaring a varable
let x = 20;
let y = 20;
let w = 20; // w is the width of my rectangle
let h = 10; // h is the height of my rectangle
let spz = 20; // spacing between shapes

function setup() {
  createCanvas(800, 400);
  noFill();
}

function draw() {
  background(220);

  // index
  for (let i = 0; i < 20; i = i + 1) {
    rect(x + spz * i, y, w, h);
    line(x + spz * i, y - h / 2, x + w + spz * i, y + h * 1.5);
    line(x + spz * i, y + h * 1.5, x + w + spz * i, y - h / 2);
  }
}
