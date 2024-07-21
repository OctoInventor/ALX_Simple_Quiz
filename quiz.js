function checkAnswer() {
    let correctAnswer = 4;
    let userAnswer = 
    document.querySelector('input[name="quiz"]:checked');
    let submitButton = document.getElementById('submit-answer');
    console.log('Checking the answer')
}

if (userAnswer == correctAnswer) {
    console.log("Correct! Well done");
} else {
    console.log("That's incorrect. Try again!");
}

submitButton.addEventListener('click', checkAnswer);