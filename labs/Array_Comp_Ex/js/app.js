let outputEntry = document.getElementById("outputEntry");
let inputEntry = document.getElementById("inputEntry");

function textEntry() {
    let numArray = inputEntry.value.split(",");

    let total = 0;
    let average = numArray.length;

    for(var i = 0; i < numArray.length; i++) {
        total = total + Number(numArray[i]);
    }

    for(var i = 0; i < numArray.length; i++) {
        average = total / average;
    }

    outputEntry.innerHTML = "Sum: " + total + ", " + "Average: " + average;
    console.log(total);

    inputEntry.value = "";
}