//code containing our script to run our game.html functions

//create a function to run our game
function playGame() {
    // we are going to narrate what is going on in this function in the console
    console.log("playGame function was called");

    //roll a die by calling the rollDie function
    var die1 = rollDie();
    console.log("the first die roll is: " + die1);

    //roll a die by calling the rollDie function
    var die2 = rollDie();
    console.log("the second die roll is: " + die2);

    //add both results
    var sum = die1 + die2;
    console.log("the sum is: " + sum);

    //output the dice rolls to the page
    document.getElementById("die1Result").textContent = "Die 1 is: " + die1;
    document.getElementById("die2Result").textContent = "Die 2 is: " + die2;
    document.getElementById("sumResult").textContent = "sum is: " + sum;

    // game logic for win or lose
    if (sum == 7 || sum == 11) {
        document.getElementById("gameResult").textContent = "You Lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        //if the numbers are the same and there is no remainder, you win
        document.getElementById("gameResult").textContent = "you win";
    }
    else {
        document.getElementById("gameResult").textContent = "you pushed";
    }
}
//create separate function to generate dice rolls - random number generator between 1-6
function rollDie() {
    //generate a random number between 1 and 6
    var die = Math.random() * 6;
    //return the random number to the code that called this fuction
    return Math.ceil(die); //return whole number to function
}
