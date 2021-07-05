
const vw = 1;
const vh = 1;
const d = 1;
const cw = 400;
const ch = 400;

function setup() {
  createCanvas(cw, ch);
}

function draw() {
  translate(cw / 2, ch / 2); // set origin to center of canvas
  scale(1, -1); // flip y axis
  stroke('purple')
  strokeWeight(1);

  const o = createVector(0, 0, 0);
  for (let x = -cw / 2; x < cw / 2 + 1; x++) {
    for (let y = -ch / 2; y < ch / 2 + 1; y++) {
      point(x, y);
    }
  }
}

function canvasToViewport(x, y) {
  return createVector(x * (vw/cw), y * (vh/ch), d);
}