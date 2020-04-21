console.log("Welcome to Psychic Game!")

var wins = 0
var losses = 0
var guessesLeft = 9;
var guessesSoFar = [];

console.log("Wins:", + " " + wins);
console.log("Losses:", + " " + losses);
console.log("Guesses Left:" + " " + guessesLeft);
    
document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
document.getElementById("guessesLeft").innerHTML = guessesLeft;

var computerLetter = computerChoose();

function computerChoose(){
var computerChoices =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computerLetter:", computerLetter);
    return computerLetter;
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log("computerLetter:", computerLetter);

    if (userGuess === computerLetter) {
        console.log("Matched!");
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("You guessed it! " + computerLetter + " was the correct answer.");
        restartGame();
        }

    else if (userGuess !== computerLetter && guessesLeft >= 2){
        console.log("User guessed: " + userGuess);
        guessesLeft--;
        console.log("Guesses left: " + guessesLeft);
        guessesSoFar.push(userGuess);
        document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }

    else if (userGuess !== computerLetter && guessesLeft < 2) {
        guessesLeft--;
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        alert("You Lost! " + computerLetter + " was the correct answer.");
        restartGame();
        }

}
    
function restartGame(){
    console.log("Restarting game...");
    guessesLeft = 9;
    guessesSoFar = [];
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
    computerLetter = "";
    console.log("Wins:", + " " + wins);
    console.log("Losses:", + " " + losses);
    console.log("Guesses Left:" + " " + guessesLeft);
    computerChoose();
}