let answers = document.getElementById("answers");
answers.addEventListener("click", questAnswer);

function questAnswer(event) {
    let answerValue = event.target.getAttribute("data-answer");
    answers.innerHTML = answerValue;

    console.log(answers)
}