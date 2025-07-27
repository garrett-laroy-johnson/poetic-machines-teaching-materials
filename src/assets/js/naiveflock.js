let numBoids = 150;

let followers = [];
let minDist = 200;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight).parent("#splash");
  background("white");
  noStroke();
  for (let i = 0; i < numBoids; i++) {
    let f = new Follower();
    followers.push(f);
  }
}

function draw() {
  //  background(220);
  //draw my mouse

  for (let f of followers) {
    f.update();
    f.bounds();
    f.distance(followers);
    f.render();
  }
}

function mousePressed() {
  for (let f of followers) {
    f.expand();
  }
}

class Follower {
  constructor() {
    this.following = int(random(numBoids)); // either element 1 or 2 of leaders
    this.pos = createVector(width / 2 + random(100), height / 2 + random(100));
    this.col = random(255);
    this.dir = createVector(followers[this.following]).sub(this.pos);
    this.magnitude = random(2, 2); // our speed
    this.tempMag = 100;
    this.d = 12 - this.magnitude * 2; // size;
    this.g = 0; // color
    this.coldir = 1;
  }
  update() {
    this.target = followers[this.following].pos.copy();
    this.dir = this.target.sub(this.pos);
    this.dir.setMag(this.magnitude);
    this.pos.add(this.dir);
    // color;
    this.g += this.coldir;
    if (this.g > 255 || this.g < 0) {
      this.coldir *= -1;
    }
  }
  expand() {
    this.magnitude = 100;
    this.dir.setMag(this.magnitude);
    this.pos.add(this.dir);
    this.magnitude = random(2, 2); // our speed
  }
  distance() {
    for (let b of followers) {
      let d = p5.Vector.dist(this.pos, b.pos);

      if (d > 0 && d < minDist) {
        //  this.g++;
        let t = p5.Vector.sub(this.pos, b.pos);
        t.normalize();
        t.div(d);
        this.pos.add(t);
      }
    }
  }
  bounds() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }

    if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
  render() {
    fill(this.g);
    circle(this.pos.x, this.pos.y, this.d);
  }
}
