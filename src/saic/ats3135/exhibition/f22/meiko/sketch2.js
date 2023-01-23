let a,b,s,c;
let angle;
let relatives = [];
let colorP = ["#308068","#285028","#087050","#b0d8b0","#88c8a8","#689028","#486038","#235F05","#537F53","#708868","#68945c","#5d8351","#4c8045","#4f794a","#446a37","#2a6e3f","#a8bf8f","#c0d695","#a9be7b","#779649","#6a8d52","#6c8650","#778a77","#788a6f","#5d7259","#4f6f46","#4e6548","#3f503b","#ecd354","#fabf3d","#da9b32","#db893f","#cd5c20","#b4530e"];
let offset=0.00001;
let x1,y1,h,w,spacing,skip,ang,h2,w2,gap;
let pointX,pointY,defaultX,defaultY;
let open,resolution1,resolution2,wLow,wHigh,hLow,hHigh;
let rectStart,rectReduct,p1,p2;
let num=1000;
let Size=30;
let widthMult=4;
let heightMult=4;

function setup() {
  let canvas=createCanvas(600, 600);
  canvas.parent('sketch-container2');
  frameRate(120);
rectMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(3);
c=random(colorP);
a=1;
  b=1;
 
  for(let i=0;i<10;i++){
     relatives[i] = new flower(width/2,height/2);
    
  }
noiseSeed(1);

}

function draw() {
    background(255);
  translate(width/2,height/2);

  
  for(let r of relatives){
    r.resetCheck();
    r.move();
    r.display();
  }
  
  //trasform,scale,rotate,,change color,change shapes
}


class flower{
  constructor(x,y){
    this.x =x;
    this.y= y;
    this.a = 0;
    this.b = 0;
    this.c = random(colorP);
  }
  move(){
    this.a=this.a+random(1);
    this.b=this.b+random(1);
  //     rotate(angle);
  // angle = angle+2;
      ang=mouseX;
    gap=10;
    spacing=5;
    strokeWeight(3);
    h=height;
    w=width;
    h2=h+gap*2;
    w2=w+gap*2;
  }
  resetCheck(){
    if (this.b > 100 ){ //tune these resets.
        this.b = 0;
        }
     if (this.a > 120 ){
        this.a  = 0;
        }
    
  }
  display(){
    //noStroke();
 
    
      fill(this.c);
// }
//   }
    
//   for(let i=width;i>-Size*widthMult;i-=Size){
//     for(let m=height;m>-Size*heightMult;m-=Size){
//     }
//   }
    
    if(b<this.y){
      scale((this.x-this.a)/this.x,(this.y-this.b)/this.y);
         // quad(-this.x,-this.y,
         // this.x,-this.y,
         // this.x,this.y,
         // -this.x,this.y);
      
            // offset = 0.01;
         //       quad(-this.x+offset+a,-this.y+offset+b,
         // this.x-offset-a,-this.y+offset+b,
         // this.x-offset-a,this.y-offset-b,
         // -this.x+offset+a,this.y-offset-b);
          push();
      noStroke();
      stroke(random(colorP));
  translate(x1,y1);
  rotate(ang*PI/180);
      rect(-this.x,-this.y,w,h);
      rect(this.x,this.y,w,h);
      rect(this.x,-this.y,w,h);
      rect(-this.x,this.y,w,h);

      seedPoint(-this.x,-this.y,h,w,ang);
      seedPoint(this.x,this.y,h2,w2,ang);
      seedPoint(this.x,-this.y,h2,w,ang);
      seedPoint(-this.x,this.y,h,w2,ang);
     pop(); 
        // offset++;
        
    }else{
      rect(0,0,0);
    }

  
  }
}


function seedPoint(x1,y1,h,w,ang){
  //top
  y2=y1-h/2;
  for(x2=x1-w/2;x2<x1+w/2+spacing;x2+=spacing){
    rotatePoint(x2,y2,x1,y1,ang);
  }
  //bottom
  y2=y1+h/2;
  for(x2=x1-w/2;x2<x1+w/2+spacing;x2+=spacing){
    rotatePoint(x2,y2,x1,y1,ang);
  }
  //left 
  x2=x1-w/2;
  for(y2=y1-h/2;y2<y1+h/2+spacing;y2+=spacing){
    rotatePoint(x2,y2,x1,y1,ang);
  }
  
  //right
  x2 =x1+w/2;
  for(y2=y1-h/2;y2<y1+h/2+spacing;y2+=spacing){
    rotatePoint(x2,y2,x1,y1,ang);
  }
}

function rotatePoint(pointX,pointY,defaultX,defaultY,angle){
  angle=(angle*PI)/180.0;
  let xDis=pointX-defaultX;
  let yDis=pointY-defaultY;
  x=cos(angle)*xDis-sin(angle)*yDis+defaultX;
  y=sin(angle)*yDis+cos(angle)*yDis+defaultY;
  point(x,y);
}

