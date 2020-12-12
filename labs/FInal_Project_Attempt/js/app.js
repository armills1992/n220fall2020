let pattern = document.getElementById("pattern");
let oneCard = document.getElementById("1Card");
let twoCard = document.getElementById("2Card");
let threeCard = document.getElementById("3Card");
let fourCard = document.getElementById("4Card");
let fiveCard = document.getElementById("5Card");
let sixCard = document.getElementById("6Card");
let sevenCard = document.getElementById("7Card");
let eightCard = document.getElementById("8Card");

let cardArray = "pattern";


function draw() {
    for(var i = 0; i < cardArray.length; i++) {
        cardArray.fill(cardArray[i]);
        rect(60, 105, 60 * i, 105 * i);
    }
}

console.log(draw);
    

oneCard.style.width = "60px";
oneCard.style.height = "105px";
oneCard.style.backgroundColor = "#000000";
oneCard.style.float = "left";
oneCard.style.margin = "10px"

twoCard.style.width = "60px";
twoCard.style.height = "105px";
twoCard.style.backgroundColor = "#000000";
twoCard.style.float = "left";
twoCard.style.margin = "10px";

threeCard.style.width = "60px";
threeCard.style.height = "105px";
threeCard.style.backgroundColor = "#000000";
threeCard.style.float = "left";
threeCard.style.margin = "10px";

fourCard.style.width = "60px";
fourCard.style.height = "105px";
fourCard.style.backgroundColor = "#000000";
fourCard.style.float = "left";
fourCard.style.margin = "10px";

fiveCard.style.width = "60px";
fiveCard.style.height = "105px";
fiveCard.style.backgroundColor = "#000000";
fiveCard.style.float = "left";
fiveCard.style.margin = "10px";

sixCard.style.width = "60px";
sixCard.style.height = "105px";
sixCard.style.backgroundColor = "#000000";
sixCard.style.float = "left";
sixCard.style.margin = "10px";

sevenCard.style.width = "60px";
sevenCard.style.height = "105px";
sevenCard.style.backgroundColor = "#000000";
sevenCard.style.float = "left";
sevenCard.style.margin = "10px";

eightCard.style.width = "60px";
eightCard.style.height = "105px";
eightCard.style.backgroundColor = "#000000";
eightCard.style.float = "left";
eightCard.style.margin = "10px";