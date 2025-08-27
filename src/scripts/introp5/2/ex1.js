function setup() {
  createCanvas(400, 400);
  background(255);

  // Line
  line(50, 50, 150, 50);

  // Rectangle
  rect(50, 80, 100, 60);

  // Ellipse
  ellipse(100, 200, 80, 40);

  // Triangle
  triangle(50, 300, 150, 300, 100, 230);

  // Quad
  quad(200, 50, 300, 50, 350, 120, 250, 120);

  // Arc
  arc(300, 200, 80, 80, PI, TWO_PI);

  // No fill for all shapes
  noFill();
  stroke(0);
}
