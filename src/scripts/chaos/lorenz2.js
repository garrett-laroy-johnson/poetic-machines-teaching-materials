// implementation of Lorenz Attractor
// more: https://en.wikipedia.org/wiki/Lorenz_attractor
// each plot corresponds to the x, y, and z positions

// starting positions
let x = 0.01;
let y = 0;
let z = 0;

// dynamical variables for lorenz attractors
let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = []; // store points

function setup() {
  createCanvas(400, 250);
}

function draw() {
  background(255);
  // iterate Lorenz equation
  let dt = 0.01;
  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  // add new point to array of points, forget oldest one to scroll
  points.push(createVector(x, y, z));
  if (points.length > width) {
    points.shift(); // remove oldest value
  }

  // move down, draw x value
  translate(0, 50);
  for (let i = 1; i < points.length; i++) {
    line(i - 1, points[i - 1].x, i, points[i].x);
  }

  // move down, draw y value
  translate(0, 50);
  for (let i = 1; i < points.length; i++) {
    line(i - 1, points[i - 1].y, i, points[i].y);
  }

  // move down, draw z value
  translate(0, 50);
  for (let i = 1; i < points.length; i++) {
    line(i - 1, points[i - 1].z, i, points[i].z);
  }
}
