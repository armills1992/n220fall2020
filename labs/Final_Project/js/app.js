//putting the divs from the html page on the screen

//the instructions for the game
let instructions = document.getElementById("instructions");

//the snake effect with the array
let snakeDiv = document.getElementById("snakeDiv");

//first row of the sqaures
let firstDiv = document.getElementById("firstDiv");
let square = document.getElementById("square");
let squareTwo = document.getElementById("squareTwo");
let squareThree = document.getElementById("squareThree");
let squareFour = document.getElementById("squareFour");

//second row of sqaures
let secondDiv = document.getElementById("secondDiv");
let squareFive = document.getElementById("squareFive");
let squareSix = document.getElementById("squareSix");
let squareSeven = document.getElementById("squareSeven");
let squareEight = document.getElementById("squareEight");

//third row of squares
let thirdDiv = document.getElementById("thirdDiv");
let squareNine = document.getElementById("squareNine");
let squareTen = document.getElementById("squareTen");
let squareEleven = document.getElementById("squareEleven");
let squareTwelve = document.getElementById("squareTwelve");

//fourth row of squares
let fourthDiv = document.getElementById("fourthDiv");
let squareThirteen = document.getElementById("squareThirteen");
let squareFourteen = document.getElementById("squareFourteen");
let squareFifteen = document.getElementById("squareFifteen");
let squareSixteen = document.getElementById("squareSixteen");

//styling the firstDiv squares
square.style.float = "left";
squareTwo.style.float = "left";
squareThree.style.float = "left";
squareFour.style.float = "left";

//styling the secondDiv squares
secondDiv.style.paddingTop = "100px";
squareFive.style.float = "left";
squareSix.style.float = "left";
squareSeven.style.float = "left";
squareEight.style.float = "left";

//styling the thirdDiv squares
thirdDiv.style.paddingTop = "100px";
squareNine.style.float = "left";
squareTen.style.float = "left";
squareEleven.style.float = "left";
squareTwelve.style.float = "left";

//styling the fourthDiv squares
fourthDiv.style.paddingTop = "100px";
squareThirteen.style.float = "left";
squareFourteen.style.float = "left";
squareFifteen.style.float = "left";
squareSixteen.style.float = "left";

/*
creating 2 global variables to change the color of the divs 
in conjunction with the onmouseout and onmouseover functions
*/
let green = "#12FF35";
let black = "#000000";

//accessing the mouse(event) function to change the color of the squares onclick
function mouse(event) {
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;
}

//setting the color of the divs based on the onmouseover function
function mouseGreen() {
    square.style.backgroundColor = green;
    squareTwo.style.backgroundColor = green;
    squareThree.style.backgroundColor = green;
    squareFour.style.backgroundColor = green;
    squareFive.style.backgroundColor = green;
    squareSix.style.backgroundColor = green;
    squareSeven.style.backgroundColor = green;
    squareEight.style.backgroundColor = green;
    squareNine.style.backgroundColor = green;
    squareTen.style.backgroundColor = green;
    squareEleven.style.backgroundColor = green;
    squareTwelve.style.backgroundColor = green;
    squareThirteen.style.backgroundColor = green;
    squareFourteen.style.backgroundColor = green;
    squareFifteen.style.backgroundColor = green;
    squareSixteen.style.backgroundColor = green;
}

//setting the color of the divs based on the onmouseout function
function mouseBlack() {
    square.style.backgroundColor = black;
    squareTwo.style.backgroundColor = black;
    squareThree.style.backgroundColor = black;
    squareFour.style.backgroundColor = black;
    squareFive.style.backgroundColor = black;
    squareSix.style.backgroundColor = black;
    squareSeven.style.backgroundColor = black;
    squareEight.style.backgroundColor = black;
    squareNine.style.backgroundColor = black;
    squareTen.style.backgroundColor = black;
    squareEleven.style.backgroundColor = black;
    squareTwelve.style.backgroundColor = black;
    squareThirteen.style.backgroundColor = black;
    squareFourteen.style.backgroundColor = black;
    squareFifteen.style.backgroundColor = black;
    squareSixteen.style.backgroundColor = black;
}

//setting up the variables for the snake function to follow the mouse
let circley = [0,0,0,0,0,0,0,0,0,0]

let circlex = [0,0,0,0,0,0,0,0,0,0]

//setting the variables to reset the background and follow the mouse movement
let background = "#12FF35";
let mouseY = mouseY
let mouseX = mouseX

//calling the function to create the snake effect
function snake() {
    snakeDiv.style.backgroundColor = background;

    circley.push(mouseY);
    circley.shift();

    circlex.push(mouseX);
    circlex.shift();

    for(var c = 0; c < circley.length; c++);

    for(var c = 0; c < circlex.length; c++);

    circle(circlex[c],circley[c],30);
}