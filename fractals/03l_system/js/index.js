const canvasContainer = document.querySelector("#canvasContainer")


let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;


function setup(){
    const cnv = createCanvas(WIDTH,HEIGHT);
    cnv.parent(canvasContainer)
}

function draw(){
    background(0);
    rect(WIDTH/2, HEIGHT/2, 40)
}


function windowResized() {
    WIDTH = canvasContainer.clientWidth;
    HEIGHT = canvasContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }