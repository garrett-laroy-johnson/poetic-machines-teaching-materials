let spacing;
const num = 100;

function setup() {
  createCanvas(400, 400);
  spacing = width / num;
}

function draw() {
  background(255);
  let jitter = 0;
  let topJit = 0;
  let botJit = 0;
  for (let i = 0; i < num; i++) {
    //  line(i*spacing,0,i*spacing,height);
    line(
      i * spacing + topJit,
      0 + jitter,
      i * spacing + botJit,
      height - jitter
    );
    jitter = jitter + random(-10, 10); // change these values to see different tendencies in the visua result
    topJit = topJit + random(-5, 5); // change these values to see different tendencies in the visua result
    botJit = botJit + random(-2.5, -2.5); // change these values to see different tendencies in the visua result
  }
  noLoop();
}
