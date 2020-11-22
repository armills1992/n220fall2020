let sqDiv = document.getElementById("sqDiv");

sqDiv.style.backgroundColor = "#79f2ba"
sqDiv.style.height = "100px";
sqDiv.style.width = "100px";

let dvSize = 100;

function increaseSize() {
    sqDiv.style.height = dvSize + "px";
    sqDiv.style.width = dvSize + "px";

    dvSize *= 1.1;
}