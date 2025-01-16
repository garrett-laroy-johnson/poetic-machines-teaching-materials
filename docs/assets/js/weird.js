function setup() {
  let w = (window.innerWidth * 3) / 4;
  createCanvas(w, window.innerHeight * 2).parent("#splash");
}

function draw() {
  circle(width / 2, height / 2, 500);
}

class Weird {
  constructor() {
    this.density = 4;
    this.num;
    this.t;
    this.segments = [];
    this.weights = [];
    this.thresh = 40; // number between 0 100.
    this.samples = [];
    this.jitter = 3;
    this.displace = [];
  }
  setup() {
    this.num = height / this.density;
    this.t = 0.0001;

    //generate weights
    for (let i = 0; i < this.num; i++) {
      this.weights.push(3 * noise(0.05 * i));
      // weights.push(random(2) + 1);

      this.displace.push(random(-this.jitter, this.jitter));
    }
  }
}
