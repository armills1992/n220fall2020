let xP = 0
let yP = 100

let xS = 5
let yS = 0

function setup() {
    createCanvas(800,600)
}

function draw() {
    background(0, 79, 21)

    if(xP < 800) {
        xP = xP + xS
    }

    fill(0, 0, 0)
    circle(xP, yP, 50)
}