let px = 0;
let py = 0; // declare both in one line
let counter = 0; // keep track of number of frames
let counterLimit = 100; // number of frames (~30 per second) before clearing out canvas

// setup runs once when you hit play
function setup() {
  createCanvas(400, 400);
  background(150, 100, 100);
}

// runs continuously thereafter
function draw() {
  background(150, 100, 100, 10); // r,g,b,a (alpha, which means opacity)
  // 1. draw with current mouse state
  line(mouseX, mouseY, px, py);

  let d = dist(mouseX, mouseY, px, py); // distance between current and previous mouse state

  // 2. then we store previous mouse state for the next frame
  px = mouseX; // previous mouse X state
  py = mouseY; // previous mouse Y state

  // distance to sw mapping
  let sw = map(d, 0, 20, 20, 0); // map() with extrapolate beyond the output range
  sw = constrain(sw, 1, 100);
  strokeWeight(sw);

  // sensistive to movement
  if (d == 0) {
    // counter is a little loop between 0 and 100
    counter++;
  } else {
    counter = 0;
  }

  if (counter > counterLimit) {
    // clear canvas
    background(150, 100, 100);
    // reset the counter
    counter = 0;
  }
}
