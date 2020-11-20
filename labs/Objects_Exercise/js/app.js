function setup() {
    createCanvas(600, 400);
    background(120);
}

let phone = {
    width: 150,
    height: 230,
    color: [0, 0, 0],
    x: 230,
    y: 100
}

function draw() {
    fill(phone.color)
    rect(phone.x, phone.y, phone.width, phone.height)
}