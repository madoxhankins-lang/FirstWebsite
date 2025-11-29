let maxNumber = 100;
let guessLimit = 10;

let randomNumber;
let guessesLeft;
let wins = 0;
let losses = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const playAgainBtn = document.getElementById("playAgain");
const result = document.getElementById("result");

function startGame() {
    maxNumber = Number(document.getElementById("maxNumber").value);
    guessLimit = Number(document.getElementById("guessLimit").value);

    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    guessesLeft = guessLimit;

    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("maxDisplay").textContent = maxNumber;

    result.textContent = "";
    result.style.color = "black";

    guessBtn.disabled = false;
    playAgainBtn.style.display = "none";

    document.getElementById("maxNumber").disabled = false;
    document.getElementById("guessLimit").disabled = false;
}

startGame();

guessBtn.addEventListener("click", () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > maxNumber) return;

    guessesLeft--;
    document.getElementById("guessesLeft").textContent = guessesLeft;

    if (guess < randomNumber) {
        result.textContent = "Higher";
        result.style.color = "red";
    }
    else if (guess > randomNumber) {
        result.textContent = "Lower";
        result.style.color = "red";
    }
    else {
        result.textContent = "Correct!";
        result.style.color = "green";
        wins++;
        document.getElementById("wins").textContent = wins;
        endGame();
        return;
    }

    if (guessesLeft === 0) {
        result.textContent = "Out of guesses! You lose.";
        result.style.color = "red";
        losses++;
        document.getElementById("losses").textContent = losses;
        endGame();
    }
});

function endGame() {
    guessBtn.disabled = true;
    playAgainBtn.style.display = "inline-block";

    document.getElementById("maxNumber").disabled = true;
    document.getElementById("guessLimit").disabled = true;
}

playAgainBtn.addEventListener("click", startGame);

document.getElementById("resetScore").addEventListener("click", () => {
    wins = 0;
    losses = 0;
    document.getElementById("wins").textContent = 0;
    document.getElementById("losses").textContent = 0;
});
