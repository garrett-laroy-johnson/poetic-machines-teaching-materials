var rectH, rectW, hStep, wStep, maxhStep, maxwStep, gDir, bDir, sDir, aDir;
var step = 14;
var maxStep = 35;
var r = 255;
var g = 0;
var b = 0;
var aDir = 0.05;
var a = -1;
var exo;

function setup() {
  h = document.documentElement.scrollHeight;
  createCanvas(windowWidth, h);
  exo = new exoRect();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class exoRect{
  constructor(){
    this.maxStep = 34;
    this.alpha = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.rectW = width;
    this.rectH = height;
    rectMode(CENTER);
    this.stepRate = -0.000125;
  }
  fade(){
    this.step = this.maxStep
    for(var i = 0; i <= this.maxStep; i++){
      
      this.r = pow(1.5, this.step);
      noStroke();
      fill(this.r, this.g, this.b, this.alpha);
      ellipse(width/2,height/2,this.rectH*2.525);
      this.rectW = map(pow(1.5, this.step), 0, pow(1.5,34), 0, width);
      this.rectH = map(pow(1.5, this.step), 0, pow(1.5,34), 0, height); 
      this.step --;
    //console.log(maxStep);
       if(this.g >= 255){
        this.gDir = -0.025;
      }else if(this.g <= 0){
        this.gDir = 0.025;
      }

      this.g = this.g + this.gDir;

       if(this.b >= 255){
        this.bDir = -0.015;
      }else if(this.b <= 0){
        this.bDir = 0.015;
      }

      this.b = this.b + this.bDir;
      
      if(this.maxStep >= 34){
        this.alpha = 0;
        
        if(this.maxStep > 32){
        this.alphaDir = 0.00125;
        }
      }else if(this.maxStep <= 34){
        this.alphaDir = 0.0125;
      }
      this.alpha = this.alpha + this.alphaDir;
  }
 if(this.stepRate >=  -0.000124){
    this.stepRate = -0.0125;
  }
    
  
    
  if(this.maxStep >= 33.9 && this.stepRate <= 0.00125){ 
  this.stepRate = this.stepRate + 0.001;
  this.sDir = this.stepRate; 
  if(this.maxStep >= 33.9 && this.stepRate >= 0.0075){
      this.stepRate = this.stepRate - 0.001;
  this.sDir = this.stepRate;
  }
    }else if(this.maxStep <= 20){
      this.maxStep = 34;
      this.alpha = 0;
    }
    this.maxStep = this.maxStep + this.sDir;
    //console.log(this.stepRate);
  
    //background alpha change
    if(this.maxStep >= 33.9 && a <= -1){
      aDir = random(0.025, 0.05);
      a = a + aDir;
    }
    else if(this.maxStep >=33.9 && a >= 4){
      aDir = random(-0.05,-0.025);
      a = a + aDir;
    }
    if(this.maxStep >= 33.9){
      a = a + aDir;
    }
    //a = a - 0.0000001
  }
 
}

function draw() {
  exo.fade();
  if(g >= 255){
        gDir = -0.1125;
      }else if(g <= 0){
        gDir = 0.1125;
      }

      g = g + gDir;
  
  if(b >= 255){
        bDir = -0.115;
      }else if(b <= 0){
        bDir = 0.115;
      }

      b = b + bDir;
  
  if(r >= 255){
        rDir = -0.125;
      }else if(r <= 0){
        rDir = 0.125;
      }
// console.log(a);
  r = r + rDir; 
  // rectMode(CORNER);
  // fill(0);
  // rect(5, 15, 130, 40)
  // fill(255);
  // text(a, 10, 30);
  // text(g, 10, 40);
  // text(b, 10, 50);
//   if(a >= 0.55){
//         aDir = -0.00001;
//       }else if(r <= 0.5){
//         aDir = 0.00001;
//       }

//       a = a + aDir;
  background(r,g,b,a);
}