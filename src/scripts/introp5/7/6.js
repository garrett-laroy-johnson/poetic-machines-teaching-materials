const w = 150;
const h = 200;
const x = 100;
const y = 100;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  // check for hover over rectangle
  let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;

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

  rect(x, y, w, h);
}
