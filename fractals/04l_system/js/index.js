const canvasContainer = document.querySelector("#canvasContainer")
let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

const PI = 3.1415926535;
var angle = PI / 4;
var decrease_percent = 0.7;
var branch_length = 200;
var slider;

function setup(){
    const cnv = createCanvas(WIDTH,HEIGHT, WEBGL);
    cnv.parent(canvasContainer)
    colorMode(HSB);
  
    slider = createSlider(0, PI * 2, 0, 0.1);
}

function draw(){
    background(0);
    orbitControl();
  stroke(255);
  angle = slider.value() * sin(millis() * 0.001);
  rotateY(90)
  translate(0, HEIGHT/2);
  branch(branch_length);
    
}

function branch(len) {
    strokeWeight(len * 0.1);
    var hue = map(len * 0.3 + 160, 0, branch_length, 0, 200)
    stroke(hue, 100, 100);
    
    // line(0, 0, 0, -len);
    box(2, len, 2,);
    translate(0, -len,0);
    if (len > 8) {
      push();
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
    }
  }

function windowResized() {
    WIDTH = canvasContainer.clientWidth;
    HEIGHT = canvasContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }




