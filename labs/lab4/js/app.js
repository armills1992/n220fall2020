let snakey = [0,0,0,0,0,0,0,0,0,0]

let snakex = [0,0,0,0,0,0,0,0,0,0]

function setup() {
    createCanvas(200,150)
}

function draw() {
    background(50)

    snakey.push(mouseY)
    snakey.shift()

    snakex.push(mouseX)
    snakex.shift()

    for(var d = 0; d < snakey.length; d++)

    for(var d = 0; d < snakex.length; d++)

    circle(snakex[d],snakey[d],10)
}