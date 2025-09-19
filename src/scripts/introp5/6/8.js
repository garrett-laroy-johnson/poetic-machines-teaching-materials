let r;
let g;
let b;
let w = 10;

function setup() {
  createCanvas(800, 800);
  strokeWeight(2);
}

function draw() {
  noLoop();
  background(0);

  for (let y = 20; y < height; y += 5) {
    for (let x = 20; x < width; x += 5) {
      let c = random(0, 100); // random number that determines whether color 1 or 2
      if (c > 50) {
        //  color 1
        r = random(100, 150);
        g = random(0, 50);
        b = random(200, 255);
      } else {
        // color 2
        r = random(0, 25);
        g = random(175, 225);
        b = random(150, 200);
      }
      stroke(r, g, b);
      line(x, y, x + w, y + w);
    }
  }
}
