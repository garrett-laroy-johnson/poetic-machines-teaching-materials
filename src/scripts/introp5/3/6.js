// global scope variables
let numLines = 250; // change var to affect for loop function and drawing spacing!
let xOffset = 50; // x starting point
let spacing; // declare but not define spacing;

function setup() {
  createCanvas(480, 480);
  strokeWeight(0.5);
  // updating a global scope
  spacing = (width - xOffset) / numLines; // 280
}

function draw() {
  background(10);
  // repeats code for a given number of iterations based on the rules inside the parentheses
  for (let x = xOffset; x < width - xOffset * 2; x += spacing) {
    // rgb range is 0 to 255;
    let b = map(x, xOffset, width, 100, 255); // number that belongs to a range, old range min, old range max, new range min, new range max
    let r = map(x, xOffset, width, 255, 100); //
    stroke(r, 100, b);

    // code to be repeated
    let y = height - x * 2;
    line(x, 0, x + x / 2, y); // 1st set is top, 2nd is elbow
    line(x + x / 2, y, x, height); // 1st set is elbow, 2nd is bottom
  }
}
