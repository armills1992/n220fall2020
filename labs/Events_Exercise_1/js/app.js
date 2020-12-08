let colorChange = document.getElementById("colorChange");
let colorAmount = document.getElementById("colorAmount");

colorChange.style.width = "605px";
colorChange.style.height = "200px";
colorChange.style.backgroundColor = "rgb(0,0,0)";
colorChange.style.margin = "5px";

colorAmount.style.width = "600px";
colorAmount.style.height = "25px";
colorAmount.style.marginTop = "20px";
colorAmount.style.marginLeft = "5px";
colorAmount.style.borderStyle = "solid";
colorAmount.style.textAlign = "center";
colorAmount.style.textTransform = "uppercase";
colorAmount.style.paddingTop = "10px";

let red = 0;
let green = 0;
let blue = 0;

function addRed(event) {
    let color = Number(event.target.getAttribute("data-add"));
    red += color;
    colorAmount.innerHTML = "rgb" + "(" + red + ", " + green + ", " + blue + ")"
    colorChange.style.backgroundColor = colorAmount.innerHTML;
    console.log(red)
}

function addGreen(event) {
    let color = Number(event.target.getAttribute("data-add"));
    green += color;
    colorAmount.innerHTML = "rgb" + "(" + red + ", " + green + ", " + blue + ")"
    colorChange.style.backgroundColor = colorAmount.innerHTML;
    console.log(green);
}

function addBlue(event) {
    let color = Number(event.target.getAttribute("data-add"));
    blue += color;
    colorAmount.innerHTML = "rgb" + "(" + red + ", " + green + ", " + blue + ")"
    colorChange.style.backgroundColor = colorAmount.innerHTML;
    console.log(blue);
}