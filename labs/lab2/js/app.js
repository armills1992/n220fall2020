function setup() {
    createCanvas(400, 300)
}
    
function draw() {
    background(0, 79, 21)

    if(mouseX < 200) {
    fill(38, 0, 255)
    circle(mouseX,mouseY,50)
}
    if(mouseX > 200) {
    fill(250, 0, 0)
    circle(mouseX,mouseY,50)
}
}