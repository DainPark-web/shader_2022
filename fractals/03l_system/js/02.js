const canvasContainer = document.querySelector("#canvasContainer")
let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;

// IFS

let iterations = 4000;
let points = [];
let radius = 5;

function setup(){
    const cnv = createCanvas(WIDTH,HEIGHT);
    cnv.parent(canvasContainer)

    points[0] = createVector(0,0);
    for(let i = 0; i < iterations; i++){
        let coin = random(1.0);
        if(coin < 0.33){
            points.push(transformL(points[i], i));

        }else if(coin < 0.66 && coin >= 0.33){

            points.push(transformR(points[i], i));
        }else {
            
            points.push(transformT(points[i], i));
        }
    }
    noLoop()
    // noStroke();
}

function draw(){
    background(0);

    fill(255)
    for(let p in points){
        let a = points[p];
        circle(a.x * 700, a.y * 700, radius)
    }
}

function transformL(point, i){
    let x = point.x * 0.5;
    let y = point.y * 0.5;
    return createVector(x, y);
}
function transformT(point, i){
    let x = point.x * 0.5 + 0.5;
    let y = point.y * 0.5 + 0.5;
    return createVector(x, y);
}
function transformR(point, i){
    let x = point.x * 0.5 + 1;
    let y = point.y * 0.5;
    return createVector(x, y);
}

function windowResized() {
    WIDTH = canvasContainer.clientWidth;
    HEIGHT = canvasContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }