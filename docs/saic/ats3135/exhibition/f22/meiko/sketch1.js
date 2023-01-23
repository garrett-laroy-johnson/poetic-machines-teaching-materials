let div=10;
let spacing;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container1');
  spacing=width/div;
    background(0);
}

function draw() {
  fill(255);
  t=(0.006*frameCount)%1;
  push();
  if(t<0.25){
    cairo(erase(map(t,0.0,0.25,0,1)));
  }else if(t<0.5){
    cairo(erase(map(t,0.25,0.5,0,1)));
  }else if(t<0.75){
    cairo(erase(map(t,0.5,0.75,0,1)));       
           }else{
             cairo(erase(map(t,0.75,1,0,1)));
           }
  cairo((map(t,0.0,0.25,0,1)));
  pop();
  
}

function cairo(q,tempIdex){
  for(var i=0;i<div;i++){
    for(var j=0;j<div;j++){
      push();
      translate(i*spacing+30,j*spacing+30);
      if(i%2==0&&j%2==0){
        rotate(HALF_PI+HALF_PI*q);
      }
      if(i%2==0&&j%2==1){
        rotate(HALF_PI*q-HALF_PI);
      }
      if(i%2==1&&j%2==0){
        rotate(HALF_PI+HALF_PI-HALF_PI*q);
      }
      if(i%2==1&&j%2==1){
        rotate(HALF_PI*q-HALF_PI);
      }
      arc(0,0,50,50,0,HALF_PI*3,PIE);
      pop();
    }
  }
}

