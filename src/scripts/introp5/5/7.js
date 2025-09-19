let displacement = 2;

function setup() {
  createCanvas(400, 400);
  noLoop();
  rectMode(CENTER); // changes how squares / rects are drawn. it interprets x and y as the center.
}

function draw() {
  background(220);
  for (let y = 0; y < height; y += 40) {
    for (let x = 0; x < width; x += 40) {
      let xOffset = random(-displacement, displacement);
      let yOffset = random(-displacement, displacement);
      for (let i = 0; i < 5; i++) {
        square(x + xOffset, y + yOffset, 40 - i * 10);
      }
    }
  }
}
