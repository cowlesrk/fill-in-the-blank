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

var randomNumber = Math.floor(Math.random() * 6) +1;
var guess = prompt("I'm thinking of a number bewteen 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {
	document.write("You guessed the number!");
} else {
	document.write("Sorry, the number was " + randomNumber + ".");
}