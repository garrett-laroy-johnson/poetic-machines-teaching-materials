function setup() {
  createCanvas(400, 400);
  noStroke();

  // Using named color
  fill("red");
  rect(20, 20, 80, 80);

  // Using RGB values
  fill(0, 255, 0);
  rect(120, 20, 80, 80);

  // Using RGBA (with alpha)
  fill(0, 0, 255, 150);
  rect(220, 20, 80, 80);

  // Using HEX code
  fill("#FFD700");
  ellipse(60, 180, 80, 80);

  // Using HSB mode
  colorMode(HSB);
  fill(200, 100, 100);
  ellipse(180, 180, 80, 80);

  // Using grayscale
  colorMode(RGB);
  fill(128);
  ellipse(300, 180, 80, 80);
}
