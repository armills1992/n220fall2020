let y1 = document.getElementById("y1");
let x1 = document.getElementById("x1");
let y2 = document.getElementById("y2");
let x2 = document.getElementById("x2");

let distanceCalc = document.getElementById("distanceCalc");

function calculateDistance() {
    let y1Number = Number(y1.value);
    let x1Number = Number(x1.value);
    let y2Number = Number(y2.value);
    let x2Number = Number(x2.value);

    let ySub = y2Number - y1Number;
    let xSub = x2Number - x1Number;

    let distance = Math.sqrt(xSub * xSub + ySub * ySub);

    distanceCalc.innerHTML = distance;
}