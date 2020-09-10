let cS = 1

function setup() {
    createCanvas(600,600)
}

function draw() {
    cS = cS + 1

    if(cS == 200) {
        cS = 1
    }

    circle(300,300,cS)
}