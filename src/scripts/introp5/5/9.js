function setup() {
  createCanvas(400, 400);
  noLoop();
  noFill();
}

function draw() {
  background(220);

  for (let j = 0; j < 10; j++) {
    // number of lines
    beginShape();
    for (let i = 0; i < 10; i++) {
      // vertex or point in the line
      let x = random(width);
      let y = random(height);
      curveVertex(x, y);
    }
    endShape();
  }
}
