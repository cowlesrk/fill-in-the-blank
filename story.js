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

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) +1;
// var guess = prompt("I'm thinking of a number bewteen 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber) {
// 	correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
// 	var guessMore = prompt("Try again. That number was too low.");
// 		if (parseInt(guessMore) === randomNumber) {
// 			correctGuess = true;
// 	}
// } else if (parseInt(guess) > randomNumber) {
// 	var guessLess = prompt("Try again. That number was too high.");
// 		if (parseInt(guessLess) === randomNumber) {
// 			correctGuess = true;
// 	}
// }	
// if (correctGuess) {
// 	document.write("You guessed the number! It was " + randomNumber + ".");
// } else {
// 	document.write("Sorry, the number was " + randomNumber + ".");
// }

/////////////////////////
// Conditional Challenge //
/////////////////////////

// Challenge Instructions

// Ask at least five questions

// Keep track of the number of questions the user answered correctly

// Provide a final message after the quiz letting the user know the number of questions he or she got right.

// Rank the player. If the player answered all five correctly, 
// give that player the gold crown: 3-4 is a silver crown; 
// 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

///////////////////////////////

// quiz begins, no answers correct

// var correct = 0;

// ask questions

// var question1 = prompt("How old am I?");
// 	if (parseInt(question1) === 25) {
// 		correct += 1;
// 	}

// var question2 = prompt("What is my favorite color?");
// 	if (question2.toUpperCase() === "MINT") {
// 		correct += 1;
// 	}

// var question3 = prompt("What is my dog's name?");
// 	if (question3.toUpperCase() === "KRYSTAL") {
// 		correct += 1;
// 	}

// var question4 = prompt("How many years have I lived in Charlotte?");
// 	if (parseInt(question4) === 23) {
// 		correct += 1;
// 	}

// var question5 = prompt("What is my favorite fruit?");
// 	if (question5.toUpperCase() === "MANGO" || "STRAWBERRY" || "STRAWBERRIES") {
// 		correct += 1;
// 	}

// output results

// document.write("You got " + correct + " out of 5 questions correct.");

// output results

// if ( correct === 5 ) {
// 	document.write("You got a gold crown!");
// } else if ( correct >= 3) {
// 	document.write("You got a silver crown!");
// } else if ( correct >= 1) {
// 	document.write("You got a bronze crown!");
// } else {
// 	document.write("You did not earn a crown. Better luck next time!");
// }


/////////////////////////
// Checking Email //
/////////////////////////

function isEmailEmpty() {
	var field = document.getElementById("email");
if (field.value === "") {
	return true;	
	} else {
		return false;
	}
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
	alert("Please provide your email address.");
}




