function setup() {
  createCanvas(400, 400);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background(220);

  for (let x = 10; x < width; x += 20) {
    for (let y = 10; y < height; y += 20) {
      let w = 20;

      let toggle = random(0, 1);
      if (toggle > 0.5) {
        circle(x, y, w); // if condition is true, run this
      } else {
        w = random(20);
        square(x, y, w); // if it is false, run this
      }
    }
  }
}
