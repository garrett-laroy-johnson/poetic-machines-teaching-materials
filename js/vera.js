let w = 800;
let h = 800;
let slice = 17;
let x;
let y;
let rand = 10;
let concent = 20;
let inner = false;
let drawProb = 0.55;

function setup() {
  createCanvas(w, h);
  x = w / slice;
  y = w / slice;
}

function draw() {
  background(255);
  noFill();

  //step 1 how to slice up grid
  //   line(x,0,x,h);
  //   line(x*2,0,x*2,h);
  //   line(x*3,0,x*3,h);

  //   line(0,y,w,y);
  //   line(0,y*2,w,y*2);
  //   line(0,y*3,w,y*3);

  //step 2 slice up grid but with 4 loop

  //   for(i=0;i<slice-1;i++){
  //     line(x+(i*x),0,x+(i*x),h);
  //     line(0,y+(i*y),w,y+(i*y));

  //   }

  //step 3 draw top row of quads with random verteces

  //   for (i = 0; i < slice; i++) {
  //     let x1 =  (x * i) + random (x/rand);
  //     let y1 = (y*0) + random (y/rand);

  //     let x2 = (x*i)+x - random (x/rand);
  //     let y2 = (y*0) + random (y/rand);

  //     let x3 = x + x * i - random (x/rand);
  //     let y3 = y - random (y/rand);

  //     let x4 = (x * i) + random (x/rand);
  //     let y4 = y - random (y/rand)
  //     quad(x1, y1, x2, y2, x3, y3, x4, y4);
  //   }

  //step 4 nested for loop -- draw full grid of quads

//   for (v = 0; v < slice; v++) {
//     let vert = v;
//     for (i = 0; i < slice; i++) {
//       let x1 = x * i + random(x / rand);
//       let y1 = y * vert + random(y / rand);

//       let x2 = x * i + x - random(x / rand);
//       let y2 = y * vert + random(y / rand);

//       let x3 = x + x * i - random(x / rand);
//       let y3 = y * (vert + 1) - random(y / rand);

//       let x4 = x * i + random(x / rand);
//       let y4 = y * (vert + 1) - random(y / rand);
//       quad(x1, y1, x2, y2, x3, y3, x4, y4);
//     }
//   }

  // step 5 create concentric effect

//   for (v = 0; v < slice; v++) {
//     let vert = v;
//     for (i = 0; i < slice; i++) {
//       //top left
//       let x1 = x * i + random(x / rand);
//       let y1 = y * vert + random(y / rand);

//       //top right
//       let x2 = x * i + x - random(x / rand);
//       let y2 = y * vert + random(y / rand);

//       //bottom right
//       let x3 = x * i + x - random(x / rand);
//       let y3 = y * (vert + 1) - random(y / rand);

//       //bottom left
//       let x4 = x * i + random(x / rand);
//       let y4 = y * (vert + 1) - random(y / rand);

//       for (fs = 0; fs < concent-(!inner); fs++) {
//         let inc = ((x/2) / concent) * fs;

//         quad(
//           x1 + inc,
//           y1 + inc,
//           x2 - inc,
//           y2 + inc,
//           x3 - inc,
//           y3 - inc,
//           x4 + inc,
//           y4 - inc
//         );
//       }
//     }
//   }

//   //step 6 randomize all verteces while encouraging increasingly smaller squares

//     for (v = 0; v < slice; v++) {
//     let vert = v;
//     for (i = 0; i < slice; i++) {

//       for (fs = 0; fs < concent-(!inner); fs++) {


//         let inc = ((x/2) / concent) * fs;

//         //top left
//       let x1 = x * i + random(x / rand)  + inc;
//       let y1 = y * vert + random(y / rand)+ inc;

//       //top right
//       let x2 = x * i + x - random(x / rand) - inc;
//       let y2 = y * vert + random(y / rand)+ inc;

//       //bottom right
//       let x3 = x * i + x - random(x / rand) - inc;
//       let y3 = y * (vert + 1) - random(y / rand)- inc;

//       //bottom left
//       let x4 = x * i + random(x / rand)+ inc;
//       let y4 = y * (vert + 1) - random(y / rand)- inc;


//         quad(
//           x1,
//           y1 ,
//           x2,
//           y2 ,
//           x3,
//           y3 ,
//           x4 ,
//           y4
//         );
//       }
//     }
//   }

  //step 7 // introduce random choice to draw or not draw any given quad


      for (v = 0; v < slice; v++) {
    let vert = v;
    for (i = 0; i < slice; i++) {

      for (fs = 0; fs < concent-(!inner); fs++) {


        let inc = ((x/2) / concent) * fs;

        //top left
      let x1 = x * i + random(x / rand)  + inc;
      let y1 = y * vert + random(y / rand)+ inc;

      //top right
      let x2 = x * i + x - random(x / rand) - inc;
      let y2 = y * vert + random(y / rand)+ inc;

      //bottom right
      let x3 = x * i + x - random(x / rand) - inc;
      let y3 = y * (vert + 1) - random(y / rand)- inc;

      //bottom left
      let x4 = x * i + random(x / rand)+ inc;
      let y4 = y * (vert + 1) - random(y / rand)- inc;

        let shouldDraw = random(1);

        if(shouldDraw < drawProb){

        quad(
          x1,
          y1 ,
          x2,
          y2 ,
          x3,
          y3 ,
          x4 ,
          y4
        );
        }
      }
    }
  }

  noLoop();
}
