function setup() {
    createCanvas(200,200)
}

function draw() {
    
    for(var s = 1; s < 5; s++) {

    square(20,s * 21,20)

    fill(255, 0, 0)

    noStroke()

    }

    if(s = 2) {
        square(s + 39,s * 21,20)
    }

    if(s = 3) {
        square(s + 38,s * 21,20)
        square(s + 59,s * 21,20)
    }

    if(s = 4) {
        square(s + 37,s * 21,20)
        square(s + 58,s * 21,20)
        square(s + 79,s * 21,20)
    }

}