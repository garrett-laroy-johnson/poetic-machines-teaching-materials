function setup() {
  createCanvas(480, 800);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i = i + 20) {
    stroke(i, 100, 10);
    strokeWeight(i / 20);
    line(i, 0, i + i / 2, 800 - i);
  }

  noLoop();
}
