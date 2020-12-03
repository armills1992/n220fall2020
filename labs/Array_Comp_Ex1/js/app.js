let wordCatcher = document.getElementById("wordCatcher");
let words = document.getElementById("words");

function submit() {
    let input = words.value.split(" ");
    let badWordOne = "clear";
    let badWordTwo = "water";
    let badWordThree = "tires";
    let wordTotal = 0;
    let notFound = "None Found"

    for(var i = 0; i < input.length; i++) {
        if(input[i] == badWordOne) {
            wordTotal += 1;
            notFound = "Found";
        }
        if(input[i] == badWordTwo) {
            wordTotal += 1;
            notFound = "Found";
        }
        if(input[i] == badWordThree) {
            wordTotal += 1;
            notFound = "Found";
        }
    }

    wordCatcher.innerHTML = input + " Bad Words: " + wordTotal + " " + notFound;
    console.log(input);

    words.value = "";
}