let w = 50;
let aD = 0; // difference in angles between each shape
let aToggle = 1; // toggle which is either 1 or -1

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  noFill();
  // must first translate to change the point of origin by addition
  translate(width / 2, height / 2);
  // before we THEN rotate

  let a = 0;
  for (let w = 10; w < width; w += 10) {
    rotate(a);
    square(-(w / 2), -(w / 2), w);
    a += aD;
  }

  aD += 0.01 * aToggle; // increase the difference in angles over time;

  if (a > 60) {
    aToggle = -1;
  } else if (a < 0) {
    aToggle = 1;
  }
}
