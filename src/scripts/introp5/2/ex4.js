function setup() {
  createCanvas(400, 400);
  background(240);

  // Regular polygon using vertex() (hexagon, no loop or variables)
  fill(100, 200, 255, 150);
  stroke(0);
  beginShape();
  vertex(160, 100);
  vertex(130, 152);
  vertex(70, 152);
  vertex(40, 100);
  vertex(70, 48);
  vertex(130, 48);
  endShape(CLOSE);

  // Irregular polygon using curveVertex()
  fill(255, 100, 200, 150);
  stroke(100);
  beginShape();
  curveVertex(250, 80);
  curveVertex(250, 80);
  curveVertex(320, 120);
  curveVertex(300, 200);
  curveVertex(220, 180);
  curveVertex(200, 120);
  curveVertex(250, 80);
  curveVertex(250, 80);
  endShape();

  // Complex shape with holes using beginContour()
  fill(200, 255, 100, 150);
  stroke(50);
  beginShape();
  vertex(80, 300);
  vertex(180, 300);
  vertex(180, 380);
  vertex(80, 380);
  beginContour();
  vertex(110, 330);
  vertex(150, 330);
  vertex(150, 360);
  vertex(110, 360);
  endContour();
  endShape(CLOSE);
}
