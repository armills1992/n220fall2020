function setup() {
    createCanvas(520,80)
}

function draw() {
    background(200)

    noFill()

    for(var n = 1; n < 26; n++) {
        circle(n * 20,40,10)

        if(n % 3 === 0) {
            fill(111, 50, 168)
        }
        else {
            noFill()
        }

        if(n % 5 === 0) {
            fill(0, 156, 36)
        }

        if(n % 3 === 0 && n % 5 === 0){
            fill(13, 0, 156)
        }
    }
}