// Try changing the capitalization of the the function name.
// Try changing "x" to "X" in the difference calculation.

function RollDiceOne() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceTwo").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceThree").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceFour").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceFive").value = Math.floor(Math.random()*6) + 1;
}