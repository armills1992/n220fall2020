function setup() {
    createCanvas(200,200)

    drawCircles("#00fbff")
}

function drawCircles(color) {
    background(75)

    fill(color)

    noStroke()

    for(var c = 0; c < 5; c++) {
        circle(c * 50,c * 50,20)
        circle(c * 50 + 50,c * 50,20)
        circle(c * 50 + 100,c * 50,20)
        circle(c * 50 + 150,c * 50,20)
        circle(c * 50 + 200,c * 50,20)
        circle(c * 50 - 50,c * 50,20)
        circle(c * 50 - 100,c * 50,20)
        circle(c * 50 - 150,c * 50,20)
        circle(c * 50 - 200,c * 50,20)
    }
 }

 function draw() {
    fill("#00fbff")

    circle(mouseX,mouseY,20)
 }