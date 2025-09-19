let res = 10;
let w; // width of our squares

function setup() {
  createCanvas(400, 400);
  noStroke();
  w = width / res;
  randomSeed(7); // Use this function to "lock in" the variation your randomness generates. Change this number to experiment with different variations. Use this in your sketch to find the variation you want to use for your project.
}

function draw() {
  for (x = 0; x < res; x++) {
    for (y = 0; y < res; y++) {
      let c = random(255);

      fill(c);
      square(x * w, y * w, w);
    }
  }

  noLoop();
}
