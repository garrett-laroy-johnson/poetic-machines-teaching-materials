class mat {
  constructor(res) {
    this.board = [];
    this.total = res*res;
  }

  getTotal(){
    let start = res*res;
    let subbing = start;
    for (let y = 0; y<this.board.length;y++){
      const sum = this.board[y].reduce((partialSum, a) => partialSum + a, 0);
      subbing -= sum;
    }
    this.total = subbing;
    console.log("this is the total " +this.total + " and the number of crawlers is " + crawlers.length)
    if (this.total <= 0){
      console.log("sim over");
      noLoop();
    }

    return this.total;

  }

  fill() {
    this.board = new Array (res);
    for (let x = 0; x < res; x++) {
      this.board[x] = new Array (res);
      for (let y = 0; y < res; y++) {
        this.board[x][y] = 0;
      }
    }
  }
}
