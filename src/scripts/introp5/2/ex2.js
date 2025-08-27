function setup() {
  createCanvas(400, 200);
  background(240);

  // Filled rectangle with stroke
  fill(255, 0, 0); // Red fill
  stroke(0); // Black stroke
  rect(20, 40, 60, 60);

  // No fill, only stroke
  noFill();
  stroke(0, 0, 255); // Blue stroke
  rect(120, 40, 60, 60);

  // Fill, no stroke
  fill(0, 255, 0); // Green fill
  noStroke();
  rect(220, 40, 60, 60);

  // No fill, no stroke (invisible)
  noFill();
  noStroke();
  rect(320, 40, 60, 60); // This won't be visible
}
