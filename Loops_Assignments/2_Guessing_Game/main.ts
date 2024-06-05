//                    Assignment :- 2 Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.

// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.

console.log("\n\t\tAssignment :- 2 Guessing Game (Using while loop )");
const maxValue: number = 100;
const randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
let isCorrectGuess: boolean = false;
const predefinedGuesses: number[] = [15, 23, 42, 87, 60, 99, 34, 70];
let index: number = 0;
while (index < predefinedGuesses.length && !isCorrectGuess) {
    const currentGuess: number = predefinedGuesses[index];
    console.log(`\nUser guess: ${currentGuess}`);
    
    if (currentGuess === randomNumber) {
        console.log('Congratulations! You guessed the correct number.');
        isCorrectGuess = true;
    } else if (currentGuess < randomNumber) {
        console.log('Your guess is too low.');
    } else {
        console.log('Your guess is too high.');
    }
    
    index++;
}

if (!isCorrectGuess) { 
       console.log(`\n\t\tSorry, you did not guess the number. The correct number was "${randomNumber}"`);
};
 

