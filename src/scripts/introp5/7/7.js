const r = 100;
const x = 300;
const y = 100;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  let distance = dist(x, y, mouseX, mouseY);

  let hover = distance < r;

  if (hover === true && mouseIsPressed === true) {
    background(34, 12, 100);
    fill(100, 32, 64);
  } else if (hover === true) {
    background(34, 12, 100);
    fill(255);
  } else {
    background(100, 32, 64);
    fill(34, 12, 100);
  }

  circle(x, y, r * 2);
}
