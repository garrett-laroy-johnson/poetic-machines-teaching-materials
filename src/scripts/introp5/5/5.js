let ySpacing = 25;
let xSpacing = 35;
let startW = 50; // width of first square

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#F0D3F7");
  stroke("#B98EA7");
  fill("#A57982");

  let i = 0; // index variable
  for (let y = 10; y < height; y += ySpacing) {
    for (let x = 0; x < width; x += xSpacing) {
      let sw = random(1, 20); // variable to hold a random strokeWeight
      strokeWeight(sw);

      square(x, y, startW - i * 0.3); // x, y, w // square or a rectangle -- x and y are top left point
      i++; // the same as writing 'i=i+1' or 'i+=1'
    }
  }
}
