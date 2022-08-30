
let walkers = [];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight).parent("#splash");
  for (i=0;i<500;i++){
    let b = new Walker (width/2,height/2);
    walkers.push(b);
  }
}

function draw() {

  background(255);
 //translate (width/2, height/2);

  for (a=0;a<walkers.length;a++){
  walkers[a].update();
  walkers[a].show();
  }
}

class Walker {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));

  }

  update() {
    let mouse = createVector(mouseX,mouseY);
    //let ran = p5.Vector.random2D();
    this.acc= p5.Vector.sub(mouse,this.pos);
    this.acc.setMag(0.01);

    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);


  }

  show () {
    ellipse(this.pos.x, this.pos.y, 20);
  }
}

function hookToProcessing(){
  remove();
}
