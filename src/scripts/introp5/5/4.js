let numCols = 200; // number of columns
let numRows = 40; // number of rows
let xSpacing, ySpacing;
let noiseScale = 0.03;
// - minus
function setup() {
  createCanvas(400, 400);
  xSpacing = width / numCols;
  ySpacing = height / numRows;
  noLoop();
}
function draw() {
  background(255);
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numCols; i++) {
      let n = noise(i * noiseScale, j * noiseScale);
      let x1 = xSpacing * i;
      let y1 = ySpacing * j + n * ySpacing;
      let x2 = xSpacing * i;
      let y2 = ySpacing * (j + 1) - n * ySpacing;
      line(x1, y1, x2, y2);
    }
  }
}
