// implementation of period doubling bifurcation.
// X axis designates increasing rate of growth (r)
// Y axis designates population (x)
// more: https://en.wikipedia.org/wiki/Period-doubling_bifurcation

let x = 0.5; // current population, between 0 and 1
let r = 2; // growth rate, between 0 and 4 usually

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0, 50);
}

function draw() {
  // run simulation as long as r is less than 4
  if (r < 4.0) {
    x = 0.5; // reset pop

    // Iterate to let the system settle (transient behavior)
    for (let i = 0; i < 100; i++) {
      x = r * x * (1 - x);
    }

    // Plot the final 100 points to show the stable orbit
    for (let i = 0; i < 100; i++) {
      x = r * x * (1 - x);
      let px = map(r, 2, 4, 0, width);
      let py = map(x, 0, 1, height, 0); // display population with lower values at the bottom of canvas
      point(px, py);
    }
    r += 0.002; // add to r
  } else {
    noLoop(); // stop sketch at r = 4;
  }
}
