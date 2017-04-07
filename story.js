var questions = 3;
var questionsLeft = " [" + questions + " questions left]";
var noun = prompt("Please type a noun:" + questionsLeft);
questions -= 1;
var questionsLeft = " [" + questions + " questions left]";
var verb = prompt("Please type an -ing verb:" + questionsLeft);
questions -= 1;
var questionsLeft = " [" + questions + " questions left]";
var adjective = prompt("Please type an adjective:" + questionsLeft);
questions -= 1;
var questionsLeft = " [" + questions + " questions left]";
var adverb = prompt("Please type an adverb ending in -ly:");

alert("Ready to read your story?");
var story = "This is a " + adjective + " " + noun + ". It is " + verb + " " + adverb + ".";

document.write(story);
