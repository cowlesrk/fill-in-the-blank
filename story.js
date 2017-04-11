/////////////////////////
// Mad Libs Game //
/////////////////////////

// var questions = 3;
// var questionsLeft = " [" + questions + " questions left]";
// var noun = prompt("Please type a noun:" + questionsLeft);
// questions -= 1;
// var questionsLeft = " [" + questions + " questions left]";
// var verb = prompt("Please type an -ing verb:" + questionsLeft);
// questions -= 1;
// var questionsLeft = " [" + questions + " questions left]";
// var adjective = prompt("Please type an adjective:" + questionsLeft);
// questions -= 1;
// var questionsLeft = " [" + questions + " questions left]";
// var adverb = prompt("Please type an adverb ending in -ly:");

// alert("Ready to read your story?");
// var story = "This is a " + adjective + " " + noun + ". It is " + verb + " " + adverb + ".";

// document.write(story);

/////////////////////////
// Picking Numbers Game //
/////////////////////////

// var input = prompt("Pick a number, any number!");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * topNumber) + 1;

// var message = randomNumber + " is a number between 1 and " + topNumber + " .";
// document.write(message);

// var input1 = prompt("Okay, let's make this more interesting. Pick a number. Make it big.");
// var topNumber = parseInt(input1);
// var input2 = prompt("And then pick one more. Last time, I promise.");
// var bottomNumber = parseInt(input2);

// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".";
// document.write(message);

/////////////////////////
// Random Number Game //
/////////////////////////

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) +1;
var guess = prompt("I'm thinking of a number bewteen 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {
	correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
	var guessMore = prompt("Try again. That number was too low.");
		if (parseInt(guessMore) === randomNumber) {
			correctGuess = true;
	}
} else if (parseInt(guess) > randomNumber) {
	var guessLess = prompt("Try again. That number was too high.");
		if (parseInt(guessLess) === randomNumber) {
			correctGuess = true;
	}
}	
if (correctGuess) {
	document.write("You guessed the number! It was " + randomNumber + ".");
} else {
	document.write("Sorry, the number was " + randomNumber + ".");
}