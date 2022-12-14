const canvasContainer = document.querySelector("#canvasContainer")
let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

// IFS

let iterations = 40;
let points = [];

let time = 0;
function setup(){
    const cnv = createCanvas(WIDTH,HEIGHT);
    cnv.parent(canvasContainer)
    for(let i = 0; i < iterations; i++){
        points.push(transform(createVector(i,i), i));
    }

    // noStroke();
}

function draw(){
    background(0);
    time += 0.1;
    fill(255)
    for(let p in points){
        let a = points[p];
        circle(a.x, a.y + sin(time + (p * 0.5)) * 80, 100)
    }
}

function transform(point, i){
    let x = point.x + i * 40;
    let y = point.y + i * 10 * sin(i * 0.2) + HEIGHT/2;
    return createVector(x, y);
}

function windowResized() {
    WIDTH = canvasContainer.clientWidth;
    HEIGHT = canvasContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }