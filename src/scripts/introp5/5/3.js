let num = 50;
let spacing;
let noiseScale = 0.02;
let w; // width of square

function setup() {
  createCanvas(600, 600);
  spacing = width / num;
  w = spacing;
  noLoop();
  noStroke();
}

function draw() {
  background(0);
  for (j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      //  fill(random(0,255));
      // noise by default gives values between 0 and 1
      let n = noise(i * noiseScale, j * noiseScale);
      // fill(n * 255);
      square(w / 2 + spacing * i, w / 2 + spacing * j, w * n);
    }
  }
}
