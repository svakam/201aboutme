'use strict';

// personalized welcome message to user from me - done
// prompt user for 5 yes/no questions
// user must respond y/n yes/no
// alert user with response they provided
// display name back to user, display name back to user in final message to them

// ask for name
var name = prompt("What is your name?");

// personalized welcome to user from me, includes question 1 y/n
var answer1 = prompt("Welcome to my website, " + name + "! My name is Vik Akam, and I'd like to ask you 5 simple yes/no questions before you enter my website. Question 1: Do you mind if we get started? y/n or yes/no");

// lower case answer 1
answer1 = answer1.toLowerCase();

// if yes, positive message; if no, too bad message
if (answer1 === "yes" || answer1 === "y") {
  alert("You replied yes. Let's get going!");
}
else if (answer1 === "no" || answer1 === "n") {
  alert("You replied no. Trick question! I'm going to ask you these questions anyway. >:) ");
}
else {
  alert("Trick question! I'm going to ask you these questions anyway. >:) ");
}

// question 2 y/n
var answer2 = prompt("Question 2: Do I play the guitar? y/n or yes/no");

// lower case answer 2
answer2 = answer2.toLowerCase();

// if 2 yes, say correct; if no, educate
if (answer2 === "yes" || answer2 === "y") {
  alert("You said yes; you're correct! I love my rock and roll. We come from the land of the ice and snow, from the midnight sun, where the hot springs flow!");
}
else if (answer2 === "no" || answer2 === "n") {
  alert("You said no. Sorry! I've been playing for a little over 10 years.");
}
else {
  alert("???");
}

// question 3 y/n
var answer3 = prompt("Question 3: Did I go to the University of Oregon? y/n or yes/no");

// lower case answer 3
answer3 = answer3.toLowerCase();

// if 3 yes, educate; if no, correct
if (answer3 === "yes" || answer3 === "y") {
  alert("You replied yes. WRONG - $*%& the Ducks!!! I went to the University of Washington. GO HUSKIES!");
}
else if (answer3 === "no" || answer3 === "n") {
  alert("You replied no. Correct! Go Huskies!");
}
else {
  alert("???");
}

// question 4 y/n
var answer4 = prompt("Question 4: Do I have a younger brother?");

// lower case answer 4
answer4 = answer4.toLowerCase();

// if 4 yes, correct; if no, educate
if (answer4 === "yes" || answer4 === "y") {
  alert("You replied yes. Correct! We are a 10 year difference. Crazy!");
}
else if (answer4 === "no" || answer4 === "n") {
  alert("You replied no. Wrong - he's younger by 10 years.");
}
else {
  alert("???");
}

// question 5 y/n
var answer5 = prompt("Question 5: Do I love the show Breaking Bad?");

// lower case answer 5
answer5 = answer5.toLowerCase();

// if 5 yes, correct; if no, educate
if (answer5 === "yes" || answer5 === "y") {
  alert("You replied yes. Correct! No more half measures, Walter. Go watch the new Breaking Bad movie on Netflix, 'El Camino'!");
}
else if (answer5 === "no" || answer5 === "n") {
  alert("You replied no. Wrong! Best show ever, man.");
}
else {
  alert("???");
}

// final message
alert("Thanks for answering (or not answering) my questions, " + name + "! Enjoy my website.");


