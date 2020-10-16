var cx = 200;
var cy = 300;
var cvx = 3;
var cvy = 3;
paddle = [380]

//define the bounce function
function bounceOffPaddle(bx, by, px, py, pw, ph) {
    if(bx > px && bx < px + pw) {
        if(by > py && by < py + ph) {
            return true;
        }
    }
}

function setup() {
    createCanvas(400, 600);
}

function draw() {
    background(200);

    //draw the circle
    circle(cx, cy, 10, 10);

    //animate the circle
    cx -= cvx
    cy += cvy

    //bounce circle off 3 walls
    if(cx < 10) {
        cx = 10;
        cvx *= -1;
    }

    if(cy > 590) {
        cy = 590;
        cvy *= -1;
    }

    if(cy < 10) {
        cy = 10;
        cvy *= -1;
    }

    //make the circle return to the center if it gets past the paddle
    if(cx > 450) {
        cx = 200;
        cy = 300;
        cvx *= -1;
    }

    //draw the rectangle with the array and give the function variables to use
    for(let i = 0; i < paddle.length; i++) {
        fill(0);
        rect(paddle[i], mouseY, 20, 50);
    

        //check to see if the circle hits the paddle
        if(bounceOffPaddle(cx, cy, paddle[i], mouseY, 20, 50)) {
            cvx *= -1;
            console.log(bounceOffPaddle)
        }
    }
}