class Crawler {
  constructor(x, y, grid) {
    this.pos = createVector(x, y);
    this.grid = grid;
    this.color = random(155);
    this.area = []; // 3x3 matrix -1 -1 , 0 -1, 1 -1 / -1 0, 0 0 , 0 1 / -1 1 , 0 1 , 1 1
  }

  getArea() {
    let counter = 0;
    //edge cases


    
    if (this.pos.y < 1 && this.pos.x >= res - 1) { //if crawler is on top right corner
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (h == -1 || w == 1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else if (this.pos.x < 1 && this.pos.y < 1) { // if crawler is in top left corner
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (w == -1 || h == -1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else if (this.pos.x < 1 && this.y >= res - 1) { //if crawler is in bottom left corner
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (w == -1 || h == 1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else if (this.pos.y >= res - 1 && this.x >= res - 1) { //if crawler is on bottom right corner
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (h == 1 || w == 1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else if (this.pos.x == 0 || this.pos.x == -1) { // if crawler is on left edge
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (w == -1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else if (this.pos.y <= 0) { //if crawler is on top edge
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (h == -1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;

            this.area[counter] = this.grid.board[ex][why];

          }
          counter += 1;
        }
      }
    } else if (this.pos.x >= res - 1) { //if crawler is on right edge
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (w == 1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else if (this.pos.y >= res - 1) { // if crawler is on bottom edge
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          if (h == 1) {
            this.area[counter] = 1;
          } else {
            let ex = this.pos.x + w;
            let why = this.pos.y + h;
            this.area[counter] = this.grid.board[ex][why];
          }
          counter += 1;
        }
      }
    } else { //if crawler is not on the edge
      for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
          let ex = this.pos.x + w;
          let why = this.pos.y + h;
          this.area[counter] = this.grid.board[ex][why];
          counter += 1;
        }
      }
    }
    return this.area;
  }

  move() {
    this.getArea();
    if (this.grid.total < 1) {
      console.log("end sim. total open spaces equals " + this.grid.total);
      noLoop();
    }
    let sum = this.area.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == 9) {
      // let ex = Math.floor(random(res));
      // let why = Math.floor(random(res));
      return;
      if (this.grid.total < 1) {
return;
      } else {
        do {
          ex++;
          if (ex >= res - 1) {
            ex = 0;
            why++;
          }
          if (why >= res - 1) {
            why = 0;
          }
          if (this.grid.total < 1) {
            break;
          }
        }
        while (this.grid.board[ex][why] == 1)
        this.pos.set(ex, why);
        this.color = random(150);
      }
    } else {
      let dir = Math.floor(random(4));
      if (dir == 0 && !this.area[3]) {
        this.pos.add(-1, 0); //left
      } else if (dir == 1 && !this.area[1]) {
        this.pos.add(0, -1); //up

      } else if (dir == 2 && !this.area[5]) {
        this.pos.add(1, 0); //right
        ;
      } else if (dir == 3 && !this.area[7]) {
        this.pos.add(0, 1); // down'
      } else if (this.area[1] && this.area[3] && this.area[5] && this.area[7]) { //escape hatch
        if (dir == 0 && !this.area[0]) {
          this.pos.add(-1, -1); //up-left
        } else if (dir == 1 && !this.area[2]) {
          this.pos.add(1, -1); //up-right

        } else if (dir == 2 && !this.area[6]) {
          this.pos.add(-1, 1); //bootm left
          ;
        } else if (dir == 3 && !this.area[8]) {
          this.pos.add(1, 1); // bottom right
        }
      }
    }
    if (this.grid.board[this.pos.x][this.pos.y] == 1){
    }
    else{
      this.grid.board[this.pos.x][this.pos.y] = 1;
      painted++;
      this.show();
    }

  }

  show() {
    let size = width / res;
    stroke(this.color);
    fill(this.color);
    square(this.pos.x * size, this.pos.y * size, size)
  }


}
