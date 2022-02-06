function RollDiceOne() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceTwo").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceThree").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceFour").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceFive").value = Math.floor(Math.random()*6) + 1;
}
