const canvasContainer = document.querySelector("#canvasContainer")
let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

// Barnsley fern 
// Aufgabe=> Color, Experiment, etc 각각 퐁인트에 sin 값줘서 돌아가게 보이게 

let iterations = 10000;
let points = [];
let colorList = []
let radius = 4;

function setup(){
    const cnv = createCanvas(WIDTH,HEIGHT);
    cnv.parent(canvasContainer)
    
}

function draw(){
    background(0);
    fill(255)  
    
}


function windowResized() {
    WIDTH = canvasContainer.clientWidth;
    HEIGHT = canvasContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }