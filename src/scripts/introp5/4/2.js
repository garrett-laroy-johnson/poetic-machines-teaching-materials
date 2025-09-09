// global variable control panel
let padding = 10;
let spacing = 2;
let margin = 70; // margin between top and left of marks, bottom and right
let yPadding = 1;
let yJitter = 2; // maximum randomness in the yPadding

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  // row 1
  stroke(0);
  // row code
  for (let y = margin; y < height - margin; y += yPadding + random(yJitter)) {
    let g = map(y, margin, height - margin, 0, 255); // take y (margin, height - margin) -> (0,255)
    stroke(g);
    // column code
    for (
      let x = margin + y * 0.5;
      x < width - margin - 30 - spacing;
      x += 20 + padding + spacing
    ) {
      line(x, y, x + 10, y + 10);
      line(x + 10 + spacing, y + 10, x + 20 + spacing, y);
    }
  }
}
