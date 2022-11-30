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
    colorMode(HSB)
    points[0] = createVector(0,0);
    for(let i = 0; i < iterations; i++){
        points.push(transform(points[i], i));
        colorList.push([random(100), random(250), random(255)]);
        
    }
    noLoop()
    console.log(colorList)
    noStroke();
}

function draw(){
    background(0);
    fill(255)  
    translate(300,0)
    // rotate(PI * 0.1)
  
    for(let p in points){
        let a = points[p];
        // error handling
        if(colorList[p] !== undefined){
            fill(...colorList[p])
        }
        circle(a.x * 80, a.y * 80 , radius)

        push()
            translate(200,0)
            rotate(-PI * 0.2)
            circle(a.x * 80, a.y * 80 , radius)
        pop()
    }
}

function transform(point, i){
    let p = random(1.0);
    let x;
    let y;
    if(p === 0.01){
        x = 0.0;
        y = 0.16 * point.y;
    }
    if(p >= 0.02 && p < 0.86){
        x = 0.85 * point.x + 0.04 * point.y;
        y = -0.04 * point.x + 0.85 * point.y + 1.6;
    }
    if(p >= 0.87 && p <= 0.94){
        x = 0.2 * point.x - 0.26 * point.y;
        y = 0.23 * point.x + 0.22 * point.y + 1.6;
    }
    if(p >= 0.94 && p <= 1.0){
        x = -0.15 * point.x + 0.28 * point.y;
        y = 0.26 * point.x + 0.24 * point.y + 0.44;
    }

    return createVector(x, y);
}

// function transformL(point, i){
//     let x = point.x * 0.5;
//     let y = point.y * 0.5;
//     return createVector(x, y);
// }
// function transformT(point, i){
//     let x = point.x * 0.5 + 0.5;
//     let y = point.y * 0.5 + 0.5;
//     return createVector(x, y);
// }
// function transformR(point, i){
//     let x = point.x * 0.5 + 1;
//     let y = point.y * 0.5;
//     return createVector(x, y);
// }

function windowResized() {
    WIDTH = canvasContainer.clientWidth;
    HEIGHT = canvasContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }