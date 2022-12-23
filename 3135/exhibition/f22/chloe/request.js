class RIG_I {
  constructor (term, src, num) {
    this.term = term;
    this.number = num;
    this.src = loadImage(src);
    
    this.createImage = function(x, y, w, h) {
      this.x = x;
      this.y = y;
      image(this.src, x, y, w, h);
    }
  }
}

function RIG(term, num) {
  return new Promise(function(resolve, reject) {
    sendRequest(term, num)
      .then(function(result) {
        let item = new RIG_I(term, result, num);
        resolve(item);
      })
      .catch(function() {
        console.log("error with loading image")
        reject();
      });
  });
}

function sendRequest(term, num) {
  return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.onload = function() {
        let response = JSON.parse(this.responseText);
        resolve(response[num]);
      }
      xhr.onerror = reject;
    xhr.open('GET', `http://localhost/?url=https://commons.wikimedia.org/w/index.php?search_term=frog`, true);
      //xhr.open('GET', `http://www.proxyrig.com/?url=https://commons.wikimedia.org/w/index.php?search_term=frog`, true);
      xhr.send();
    });
}



