function setup() {
    createCanvas(400,400)
}

function draw() {
    background(200)

    noFill()

    for(var c = 0; c < 42; c++)
    circle(200,200,c * 5)
}