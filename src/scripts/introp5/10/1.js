let rows = 40;
let noiseScale = 0.007; //
let noiseSpeed = 0.01;

function setup() {
  createCanvas(600, 600);
  noiseSeed(1); // stabilize the noise field -- everytime we get the same results from noise
}

function draw() {
  background(220);
  let yd = height / rows;
  let xd = width / rows;
  for (let x = xd / 2; x < width; x += xd) {
    for (let y = yd / 2; y < height; y += yd) {
      let w =
        noise(x * noiseScale, y * noiseScale, frameCount * noiseSpeed) * xd; // plug in up to 3 values, returns avalue betwen 0 -1
      circle(x, y, w);
    }
  }
}
