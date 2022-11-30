const canvasContainer = document.querySelector("#canvasContainer");
let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

const PI = 3.1415926535;
var angle = PI / 4;
var decrease_percent = 0.7;
var branch_length = 200;
var slider;

function setup() {
  const cnv = createCanvas(WIDTH, HEIGHT, WEBGL);
  cnv.parent(canvasContainer);
  colorMode(HSB);
  rectMode(CORNER);
  slider = createSlider(0, 0.7, 0, 0.1);
}

function draw() {
  background(0);
  orbitControl(1,1,0.03);
  stroke(255);
  angle = slider.value()
  rotateY(90);
  translate(0, HEIGHT / 2);
  branch(branch_length);
}

function branch(len) {
  strokeWeight(len * 0.1);
  var hue = map(len * 0.3 + 160, 0, branch_length, 0, 200);
  stroke(hue, 100, 100);

  // line(0, 0, 0, -len);
  box(2, len, 2);
  translate(0, -len, 0);
  if (len > 8) {
    push();
    // rotate(PI / 4, [angle, -angle, angle]);
      rotateX(angle);
      rotateY(-angle * 2);
      rotateZ(-angle);
    branch(len * decrease_percent);
    pop();

    push();
    rotateX(-angle);
    rotateY(angle * 2);
    rotateZ(angle);
    branch(len * decrease_percent);
    pop();

    if (len < 10) {
      //add Flower and Leaf
      push();
      stroke(30, 100, 200);
      fill(50,100,100)
      rotateX(-angle);
      rotateY(angle * 2);
      rotateZ(angle);
      cone(5, 15);
      branch(len * decrease_percent);
      pop();

      push();
      stroke(250, 100, 200);
      fill(50,100,100)
      rotateX(-angle);
      rotateY(angle * 2);
      rotateZ(angle);
      torus(4, 3, 16, 4)
      branch(len * decrease_percent);
      pop();
    }
   
  }
}

function windowResized() {
  WIDTH = canvasContainer.clientWidth;
  HEIGHT = canvasContainer.clientHeight;
  resizeCanvas(WIDTH, HEIGHT);
}
