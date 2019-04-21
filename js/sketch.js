// insight: https://youtu.be/cl-mHFCGzYk
let canvas;

let sakura = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
  spritesheet = loadImage('/images/petals4.png');
}

function windowResized() {
  resizeCanvas(0.95 * windowWidth, windowHeight);
}

function setup() {
  frameRate(30);
  canvas = createCanvas(0.95 * windowWidth, windowHeight);
  canvas.position(0, 0);
  // canvas.style('z-index', '-1');
  gravity = createVector(0, 0.01);

  for (let x = 0; x < spritesheet.width; x += 32) {
    for (let y = 0; y < spritesheet.height; y += 32) {
      let img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }

  for (let i = 0; i < 38; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    sakura.push(new SakuraPetal(x, y, design));
  }
}

function draw() {
  // background(0);
  clear();
  zOff += 0.1;

  for (petal of sakura) {
    let xOff = petal.pos.x / width;
    let yOff = petal.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.001);

    petal.applyForce(gravity);
    petal.applyForce(wind);
    petal.update();
    petal.render();
  }

  // for (let i = sakura.length - 1; i >= 0; i--) {
  //   if (sakura[i].offScreen()) {
  //     sakura.splice(i, 1);
  //   }
  // }
}