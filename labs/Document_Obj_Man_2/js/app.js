let sqDiv = document.getElementById("sqDiv");

sqDiv.style.height = "200px";
sqDiv.style.width = "200px";
sqDiv.style.backgroundColor = "#009900"

function writeMessage() {
    let onColor = "#b80056";

    sqDiv.style.backgroundColor = onColor;
    sqDiv.innerHTML = "Hey there!";
}

function eraseMessage() {
    let offColor = "#009900";

    sqDiv.style.backgroundColor = offColor;
    sqDiv.innerHTML = "";
}

function clickColor() {
    let actColor = "#009900";

    sqDiv.style.backgroundColor = actColor;
}