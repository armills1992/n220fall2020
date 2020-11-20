function setup() {
    createCanvas(600, 400);
    background(200);
    noStroke()
}

let manyCircles = [
    {x: 60, y: 40, r: 30},
    {x: 200, y: 250, r: 60},
    {x: 400, y: 120, r: 80},
    {x: 100, y: 350, r: 20}
]

function draw() {
    for(let i = 0; i < manyCircles.length; i++) {
        circle(manyCircles[i].x, manyCircles[i].y, manyCircles[i].r)
        manyCircles[i].x += 1;
    }
}