let jump = 20;

function setup() {
  createCanvas(400, 400);
  noLoop();
  noFill();
}

function draw() {
  background(220);

  for (let j = 0; j < 50; j++) {
    // number of lines
    beginShape();
    let x = random(width);
    let y = random(height);
    for (let i = 0; i < 10; i++) {
      // vertex or point in the line
      x += random(-jump, jump);
      if (x > width) {
        x = width;
      }
      if (x < 0) {
        x = 0;
      }

      y += random(-jump, jump);
      if (y > height) {
        y = height;
      }
      if (y < 0) {
        y = 0;
      }
      curveVertex(x, y);
    }
    endShape();
  }
}
