function setup() {
    createCanvas(300, 300);
    background(150);
}

let cuteCircle = {
    x: 150,
    y: 150,
    r: 100
}

function draw() {
    circle(cuteCircle.x, cuteCircle.y, cuteCircle.r + 1)
}