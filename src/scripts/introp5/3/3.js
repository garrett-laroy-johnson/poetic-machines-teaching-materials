let x = 25;
let y = 50;
let d = 20; // diameter of our circle
let r = d / 2;
let num = 10;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < num; i = i + 1) {
    circle(x * i, y, d); // x,y, diameter
    line(x * i - r, y - r, x * i - r, y + r); // 2 xy pairs for the start and stop
    line(x * i + r, y - r, x * i + r, y + r); // 2 xy pairs for the start and stop
  }

  noLoop();
}
