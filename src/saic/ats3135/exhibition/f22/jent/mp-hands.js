// from https://google.github.io/mediapipe/solutions/hands#javascript-solution-api
const videoElement = document.getElementsByClassName('input_video')[0];
const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({
      image: videoElement
    });
  },
  width: 1280,
  height: 720
});
camera.start();