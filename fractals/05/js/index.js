const canvasContainer = document.querySelector("#canvasContainer");
let WIDTH = canvasContainer.clientWidth;
let HEIGHT = canvasContainer.clientHeight;
// credits to https://p5js.org/examples/simulate-the-mandelbrot-set.html

// values from the example page https://en.wikipedia.org/wiki/Julia_set
let time = 0;
let ca = Math.sin(time) * 2;
let cb = Math.cos(time) * 2;
function setup() {
    const cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent(canvasContainer)

pixelDensity(1);
// noLoop();
}

let w = Math.abs(Math.sin(time) * 4) + 1

function draw() {
background(0);

// Establish a range of values on the complex plane
// A different range will allow us to "zoom" in or out on the fractal

// It all starts with the width, try higher or lower values
// let w = 2;
const h = (w * height) / width;

// Start at negative half the width and height
const xmin = -w / 2;
const ymin = -h / 2;

// Make sure we can write to the pixels[] array.
// Only need to do this once since we don't do any other drawing.
loadPixels();

// Maximum number of iterations for each point on the complex plane
const maxiterations = 50;

// x goes from xmin to xmax
const xmax = xmin + w;
// y goes from ymin to ymax
const ymax = ymin + h;

// Calculate amount we increment x,y for each pixel
const dx = (xmax - xmin) / (width);
const dy = (ymax - ymin) / (height);

// Start y
let y = ymin;


for (let j = 0; j < height; j++) {
    // Start x
    let x = xmin;
    for (let i = 0; i < width; i++) {

        // Now we test, as we iterate z = z^2 + C,  does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
            // this is the formula to (a+bi)^2
            const aa = a * a;
            const bb = b * b;
            const twoab = (2.0 * a * b);
            // note, Mandelbrot is the same process but
            // a = aa - bb + x;
            // b = twoab + y;                
            a = aa - bb + ca;
            b = twoab + cb;
            // Infinty in our finite world is simple, let's just consider it 16
            if (dist(aa, bb, 0, 0) > 8) {
             
                break;  // Bail
            }
           
            n++;
        }

        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i + j * width) * 4;
        const norm = map(n, 0, maxiterations, 0, 1);
        let bright = map(sqrt(norm), 0, 1, 0, 255);
        if (n == maxiterations) {
            bright = 0;
        } else {
            // Gosh, we could make fancy colors here if we wanted
            pixels[pix + 0] = bright * ca * 2 ;
            pixels[pix + 1] = bright * cb * 2;
            pixels[pix + 2] = bright * 2;
            pixels[pix + 3] = 255;
        }
        x += dx;
    }
    y += dy;
}
ca = Math.sin(time) * 0.7;
cb = Math.cos(time) * -0.7 ;
w = Math.abs(Math.sin(time) * 4) + 2
time += 0.4;

updatePixels();
}