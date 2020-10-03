let stop = ["#ff0000","#ffd900","#00ff26"]

function setup() {
    
    createCanvas(50,130)

    stoplight()
}

function stoplight() {
    background(0)

    for(var c = 0; c < stop.length; c++) {
    fill(stop[c])
    circle(25, 25 + c * 40, 20)
    }
}