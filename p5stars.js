let stars = []

function setup() {
  const size = 5000;
  createCanvas(window.innerWidth-20, window.innerHeight-20, WEBGL);
  setAttributes('antialias', true);
  createEasyCam({ distance: size });
  setupStars(size);
}

function draw() {
  background(0);
  drawEarth();
  stars.forEach(star => star.display());
}

function setupStars(size) {
  Array.from(Array(size)).forEach(() => {
    stars.push(new Star(size));
  });
}

function Star(size) {
  this.size = random(.1, 10);
  this.x = random(-size, size);
  this.y = random(-size, size);
  this.z = random(-size, size);
  this.color = color(random(0, 255), random(0, 255), random(0, 255), random(25, 100));

  this.display = function() {
    push();
    fill(this.color);
    stroke(this.color);
    // noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.size);
    pop();
  }
}

function drawEarth() {
  push();
  colorMode(HSB);
  fill(255, 204, 100);
  noStroke();
  sphere(10);
  pop();
}