let num = 100; // number of circles in a row
let spacing; // declare but not define
// - minus
function setup() {
  createCanvas(400, 400);
  spacing = width / num;
  noLoop();
  noStroke();
}
function draw() {
  background(0);
  // index based approacch
  // j keeps track of our horizontal rows
  for (let j = 0; j < num; j++) {
    // i keeps track of our vertical columns
    let vShift = 0;
    let ran = random(0, 100);
    if (ran > 50) {
      vShift = random(-20, 20);
    }
    for (let i = 0; i < num; i++) {
      let r = random(0, 100);
      if (r > 60) {
        circle(
          random(-10, 10) + i * spacing + spacing / 2,
          j * spacing + spacing / 2 + vShift,
          spacing
        );
      }
    }
  }
}
