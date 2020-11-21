let inputName = document.getElementById("inputName");
let nameGreeting = document.getElementById("nameGreeting");

function sayHello() {
    let hiGreeting = inputName.value;
    nameGreeting.innerHTML = "Hello " + hiGreeting;
    console.log("Hello " + inputName.value);
}