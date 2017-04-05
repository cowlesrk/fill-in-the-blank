var noun = prompt("Please type a noun:");
var verb = prompt("Please type an -ing verb:");
var adjective = prompt("Please type an adjective:");
var adverb = prompt("Please type an adverb ending in -ly:");

alert("Ready to read your story?");
var story = "This is a " + adjective + " " + noun + ". It is " + verb + " " + adverb + ".";

document.write(story);
