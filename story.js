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

// function isEmailEmpty() {
// 	var field = document.getElementById("email");
// if (field.value === "") {
// 	return true;	
// 	} else {
// 		return false;
// 	}
// }

// var fieldTest = isEmailEmpty();
// if (fieldTest === true) {
// 	alert("Please provide your email address.");
// }

/////////////////////////
// Random Number Game with Functions //
/////////////////////////
 
// function getRandomNumber ( upper ) {
// 	var randomNumber = Math.floor( Math.random() * upper ) + 1;
// 	return randomNumber;
// }

// alert( getRandomNumber(6) );
// alert( getRandomNumber(600) );
// alert( getRandomNumber(60000) );

/////////////////////////
// Caclulate Area //
/////////////////////////

// function getArea(width, length, unit) {
// 	var area = width * length;
// 	return area + " " + unit;
// }
// alert(getArea(10,20, "sq ft"));

/////////////////////////
// Random Number Range Challenge //
/////////////////////////

// function getRandomNumber ( lower, upper ) {
// 	if ( isNaN(lower) || isNaN(upper) ) {
// 		throw new Error("Must be numbers");
// 	}

// 	var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
// 	return randomNumber;
// }

// alert( getRandomNumber(2, 20) );
// alert( getRandomNumber(20, 200) );
// alert( getRandomNumber(200, hi) );

/////////////////////////
// Random Number Range Challenge with Prompts //
/////////////////////////

// function getRandomNumber(upper, lower) {
//     var lowNum = parseInt(prompt('Please choose a number.'));
//     var highNum = parseInt(prompt('Please choose a number larger than ' + lowNum + '.'));
//     if ( isNaN(lowNum) || isNaN(highNum) ) {
//         throw new Error('WRONG. \ TRY AGAIN.');
// } return Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
// }

// console.log(getRandomNumber());

/////////////////////////
// Counter Loop //
/////////////////////////

// var counter = 1;
// while ( counter <= 10 ) {
//   console.log(counter);
//   counter += 1;
// }

/////////////////////////
// Print 10 Random Numbers Loop //
/////////////////////////

// function randomNumber(upper) {
// 	return Math.floor( Math.random() * upper) + 1;
// }

// var counter = 0;
// while (counter < 10) {
// 	  var number = randomNumber(6);
// 	  document.write(number + " ");
// 	  counter += 1;
// }

/////////////////////////
// Computer vs. Computer Guessing Game //
/////////////////////////

// var max = 1000;
// var randomNumber = getRandomNumber(max);
// var guess;
// var attempts = 0;

// function getRandomNumber(max) {
// 	return Math.floor( Math.random() * max ) + 1;
// }

// while ( guess !== randomNumber) {
// 	guess = getRandomNumber( max );
// 	attempts += 1;
// }

// document.write("It took " + attempts + " times for the computer to guess " + randomNumber);

/////////////////////////
// User vs. Computer Guessing Game //
/////////////////////////

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber(max) {
// 	var num = Math.floor( Math.random() * max ) + 1;
// 	return num;
// }

// do {
// 	guess = prompt("I'm thinking of a number between 1 and 10. What is it?");
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 		correctGuess = true;
// 	}
// } while ( ! correctGuess )


// document.write("It took " + guessCount + " times for you to guess " + randomNumber);

/////////////////////////
// Print divs to page //
/////////////////////////

// var html = "";

// for ( var num = 1; num <= 10; num += 1 ) {
// 	html += "<div>" + num + "</div>";
// }

// document.write(html);

/////////////////////////
// Adding to Guessing Game //
/////////////////////////

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber(max) {
// 	var num = Math.floor( Math.random() * max ) + 1;
// 	return num;
// }

// while ( guessCount < 10 ) {
// 	guess = prompt("I'm thinking of a number between 1 and 10. What is it?");
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 		correctGuess = true;
// 		break;
// 	}
// } 

// if ( correctGuess ) {
// 	document.write("It took " + guessCount + " times for you to guess " + randomNumber);
// } else {
// 	document.write("Sorry, you didn't guess it.");
// }

/////////////////////////
// DRY Refactor Challenge //
/////////////////////////

// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;

// var counter = 0;

// while (counter <= 10) {
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
// counter += 1;
// }

// document.write(html);

/////////////////////////

// function randomRGB() {
// 	return Math.floor(Math.random() * 256);
// }

// for ( var counter = 1; counter <= 10; counter +=1) {
// red = randomRGB();
// green = randomRGB();
// blue = randomRGB();
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// }

// document.write(html);

/////////////////////////

// function randomRGB() {
// 	return Math.floor(Math.random() * 256);
// }

// function randomColor() {
// 	var color = 'rgb(';
// 	color += randomRGB() + ',';
// 	color += randomRGB() + ',';
// 	color += randomRGB() + ')';
// 	return color;
// }

// function print(content) {
// 	document.write(content);
// }

// for ( var counter = 0; counter < 100; counter +=1) {
// 	rgbColor = randomColor();
// 	html += '<div style="background-color:' + rgbColor + '""></div>';

// }

// print(html);

/////////////////////////
// Search for Items in an Array //
/////////////////////////

var inStock = ["apples", "eggs", "milk", "cookies", "carrots"];
var search;

function print(message) {
	document.write('<p>' + message + '</p>');
}

while (true) {
	search = prompt("Search for a product in our store. Type 'list' to show all of the products and 'quit' to exit");
	search = search.toLowerCase();
	if ( search === "quit") {
		break;
	} else if ( search === "list") {
		print( inStock.join(", ") );
	} else {
		if ( inStock.indexOf( search ) > -1) {
			print( "Yes, we have " + search + " in stock.");
		} else {
			print( "Sorry, " + search + " is not in stock.");
		}
	}

}
