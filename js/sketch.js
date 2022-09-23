// built starting from Daniel Schiffman's Vector youtube series: https://www.youtube.com/watch?v=bKEaK7WNLzM


let walkers = [];

let bg = "white";

function setup() {
  let w = window.innerWidth*3/4;
  createCanvas(w, window.innerHeight).parent("#splash");
  for (i=0;i<50;i++){
    let b = new Walker (width/2,height/2);
    walkers.push(b);
  }
}

function draw() {

  background(bg);
 //translate (width/2, height/2);

  for (a=0;a<walkers.length;a++){
  walkers[a].update();

//walkers[a].update();
  walkers[a].edges();
  }

beginShape()
curveVertex(walkers[0].pos.x,walkers[0].pos.y)
  for (a=0;a<walkers.length;a++){
curveVertex(walkers[a].pos.x,walkers[a].pos.y)
  }
  curveVertex(walkers[walkers.length-1].pos.x,walkers[walkers.length-2].pos.y);
  endShape();
}

class Walker {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(4));

  }

  update() {
    let mouse = createVector(mouseX,mouseY);
    //let ran = p5.Vector.random2D();
    this.acc= p5.Vector.sub(mouse,this.pos);
    this.acc.setMag(0.05);

    this.vel.add(this.acc);
    this.vel.limit(4);
    this.pos.add(this.vel);


  }

  edges(){
    if(this.pos.x<=0){
      this.vel.mult(-1);
    }
    if(this.pos.x>=width){
      this.vel.mult(-1);
    }

  }

  show () {
    ellipse(this.pos.x, this.pos.y, 20);
  }
}

function hookToProcessing(){
  remove();
  splash += 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
