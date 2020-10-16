//creates array for the 6 blocks at the top of the canvas
var blocks = [60, 120, 180, 240, 300, 360];

//starts the program and creates and sets the size of the canvas once
    //so the program has a place to run 
function setup() {
    createCanvas(400, 400);
}

//creates the ball object with all of the variables that describe the ball
var ball = {
    x: 100,
    y: 100,
    velocityX: 2,
    velocityY: 2,

    //creates a function inside the ball object that uses the variables inside
        //the object to give the ball a starting position and animate the ball
    update: function() {
        noFill();
        stroke(255, 238, 130);
        circle(this.x, this.y, 10);
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};

//creates the paddle object will all of the variables that describe the paddle
var paddle = {
    x: 100,
    y: 350,
    w: 150,
    h: 20,

    //creates a function inside the paddle object that uses the variables inside
        //the object to give the paddle a starting position, and then animates the
        //paddle to take input from the left and right arrow keys on the keyboard
    update: function() {
        noFill();
        stroke(143, 251, 255);
        rect(this.x, this.y, this.w, this.h);
        if(keyIsDown(LEFT_ARROW)) 
        this.x -= 2;
            if(keyIsDown(RIGHT_ARROW)) {
                this.x += 2;
            };
    }
};

//creates the draw function to be able to call the above objects and allow them to
    //interact and creates the background so that it will update each frame to make
    //it look like a single ball is moving on the screen
function draw() {
    background(70);

    //these 2 lines call the functions inside of both the ball and paddle objects
    ball.update();
    paddle.update();
    
    //the next 3 "if statements" tell the ball to bounce of the top, left, and right sides
        //of the canvas so that it can only go off the screen on the bottom
    if(ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
    }
    
    if(ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    }
    
    if(ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    }
    
    //this "if statement" calls the "hitTestPoint" function and then tells the ball to
        //mulitiply its Y velocity by -1 to send the ball back upward toward the blocks
        //if the "hitTestPoint" function returns true
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
        ball.velocityY *= -1;
    }
    
    //creates a "for loop" that starts at 0 and uses the length of the blocks array to
        //draw all 6 blocks 60 pixels apart
    for(var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20);
        
        //calls the "hitTestPoint" function for the array of blocks and if a block is hit
            //it removes that block from the screen
        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1;
            blocks.splice(i, 1);
        }
    }
}

//creates a "for loop" that sets the x and y postion of the array of blocks on the screen
for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60 + 20, y: 10 };
}
//creates the "hitTestPoint" function that allows the ball to bounce off the paddle and
    //the blocks and be deflected back if the function returns true
function hitTestPoint(px, py, bx, by, bw, bh) {
    if(px > bx && px < bx + bw) {
        if(py > by && py < by + bh) {
            return true;
        }
    } 
    return false;
}