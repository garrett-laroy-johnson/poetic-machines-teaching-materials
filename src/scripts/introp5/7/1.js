let x = 200;
let y = 200;
let w = 200;
let r = w / 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let d = dist(mouseX, mouseY, x, y);

  if (d < r) {
    fill("blue");
  } else {
    fill("red");
  }

  circle(x, y, w);
  strokeWeight(2);
  point(x, y);
  line(mouseX, mouseY, x, y);
}
