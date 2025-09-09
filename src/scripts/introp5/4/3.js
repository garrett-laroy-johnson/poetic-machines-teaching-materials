//

let num = 100; // give a certain number of shapes
// 10 shapes per row, and ten shapes per column

let spacing;

function setup() {
  createCanvas(400, 400);
  noLoop();
  spacing = width / num;
  noFill();
}

function draw() {
  background(255);
  // and adjust the spacing between shapes vertically;
  for (let y = spacing / 2; y < height; y += spacing + 20) {
    // adjust the spacing between shapes horizontally
    for (
      let x = spacing / 2 + random(spacing / 2);
      x < width - spacing / 2;
      x += random(spacing * 2)
    ) {
      // adjust the width of the shape
      circle(x, y, spacing);
    }
  }
}
