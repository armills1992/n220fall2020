let numberGuess = document.getElementById("numberGuess");
let result = document.getElementById("result");

function submitGuess() {
    let input = Number(numberGuess.value);
    let test = input - 8;

    if(test < 0) {
        result.innerHTML = "Too Low!";
    }
    if(test > 0) {
        result.innerHTML = "Too High!";
    }
    if(test == 0) {
        result.innerHTML = "Good Job!";
    }
    
    numberGuess.value = "";
}