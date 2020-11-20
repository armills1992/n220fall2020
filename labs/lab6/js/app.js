let helloName = document.getElementById("hello");

helloName.innerHTML = "hello ";
helloName.style.backgroundColor = "#53a39d";
helloName.style.width = "278px";
helloName.style.height = "18px";

function insertName() {
    let output = Math.random();
    let input = "hello ";
    if(output > 1) input = name();
    helloName.innerHTML = input
}