let h,rDir,gDir,bDir;
var r = 0;
var g = 0;
var b = 0;
function setup() {
  h = document.documentElement.scrollHeight;
  createCanvas(windowWidth, h);
  background(0);
}

function draw() {
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
  r = r + rDir;
  background(r,g,b);
}

function windowResized(){
    createCanvas(windowWidth, h);
}