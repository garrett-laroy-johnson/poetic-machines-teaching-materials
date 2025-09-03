// implementation of Lorenz's attractor
// more: https://en.wikipedia.org/wiki/Lorenz_attractor
// x axis: x position
// y axis: z position

// starting positions
let x = 0.01;
let y = 0;
let z = 0;

// dynamical variables for lorenz attractors
let a = 10;
let b = 28;
let c = 8.0 / 3.0;

// store previous positions so to draw fluid lines
let px = 0;
let py = 0;
let pz = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  translate(200, 100);

  let dt = 0.01;
  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  scale(5);
  strokeCap(SQUARE);
  stroke(z * 2, 40);

  if (frameCount > 0) {
    line(x, z, px, pz);
  }

  px = x;
  py = y;
  pz = z;
}
