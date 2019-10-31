'use strict';

// week 1 day 2
// personalized welcome message to user from me - done
// prompt user for 5 yes/no questions
// user must respond y/n yes/no
// alert user with response they provided
// display name back to user, display name back to user in final message to them

// global variable score counter; increment only for correct answers
var scoreCounter = 0;

// global variable total questions; increment only for every question asked
var totalQuestions = 0;

// ask for name
var name = prompt("What is your name?");
console.log("name: " + name);

// personalized welcome to user from me, includes question 1 y/n
totalQuestions++;
var answer1 = prompt("Welcome to my website, " + name + "! My name is Vik Akam, and I'd like to ask you 7 questions before you enter my website. You'll score points for each question right! Question 1: Do you mind if we get started? y/n or yes/no");

// lower case answer 1
answer1 = answer1.toLowerCase();

// if yes, positive message; if no, too bad message
if (answer1 === "yes" || answer1 === "y") {
  console.log("You replied yes. So you DO mind?");
  alert("You replied yes. So you DO mind?");
}
else if (answer1 === "no" || answer1 === "n") {
  console.log("You replied no; you don't mind. Let's get started!");
  alert("You replied no; you don't mind. Let's get started!");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else {
  console.log("Didn't give y/n answer");
  alert("Trick question! I'm going to ask you these questions anyway. >:) ");
}



// question 2 y/n
totalQuestions++;
var answer2 = prompt("Question 2: Do I play the guitar? y/n or yes/no");

// lower case answer 2
answer2 = answer2.toLowerCase();

// if 2 yes, say correct; if no, educate
if (answer2 === "yes" || answer2 === "y") {
  console.log("You said yes; you're correct!");
  alert("You said yes; you're correct! I love my rock and roll man.");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else if (answer2 === "no" || answer2 === "n") {
  console.log("You said no. Sorry! I've been playing for a little over 10 years! Time flies.");
  alert("You said no. Sorry! I've been playing for a little over 10 years! Time flies.");
}
else {
  alert("???");
  console.log("Didn't give y/n answer");
}



// question 3 y/n
totalQuestions++;
var answer3 = prompt("Question 3: Did I go to the University of Oregon? y/n or yes/no");

// lower case answer 3
answer3 = answer3.toLowerCase();

// if 3 yes, educate; if no, correct
if (answer3 === "yes" || answer3 === "y") {
  console.log("You replied yes. WRONG - $*%& the Ducks!!! I went to the University of Washington. GO HUSKIES!");
  alert("You replied yes. WRONG - $*%& the Ducks!!! I went to the University of Washington. GO HUSKIES!");
}
else if (answer3 === "no" || answer3 === "n") {
  console.log("You replied no. Correct! Go Huskies!");
  alert("You replied no. Correct! Go Huskies!");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else {
  console.log("Didn't give y/n answer");
  alert("???");
}



// question 4 y/n
totalQuestions++;
var answer4 = prompt("Question 4: Do I have a younger brother? y/n or yes/no");

// lower case answer 4
answer4 = answer4.toLowerCase();

// if 4 yes, correct; if no, educate
if (answer4 === "yes" || answer4 === "y") {
  console.log("You replied yes. Correct! We are a 10 year difference.");
  alert("You replied yes. Correct! We are a 10 year difference.");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else if (answer4 === "no" || answer4 === "n") {
  console.log("You replied no. Wrong - he's younger by 10 years.");
  alert("You replied no. Wrong - he's younger by 10 years.");
}
else {
  console.log("didn't give y/n answer");
  alert("???");
}



// question 5 y/n
totalQuestions++;
var answer5 = prompt("Question 5: Do I love the show Breaking Bad?y/n or yes/no");

// lower case answer 5
answer5 = answer5.toLowerCase();

// if 5 yes, correct; if no, educate
if (answer5 === "yes" || answer5 === "y") {
  console.log("Replied yes");
  alert("You replied yes. Correct! No more half measures, Walter.");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else if (answer5 === "no" || answer5 === "n") {
  console.log("Replied no");
  alert("You replied no. Wrong! Best show ever, man.");
}
else {
  console.log("didn't give y/n answer");
  alert("???");
}

// final message
console.log("final message");
alert("Thanks for answering (or not answering) my questions, " + name + "! Enjoy my website.");





// week 1 day 3


// 6th question:
// while input is not numeric input, prompt user for numeric input
// 4 guesses allowed
// if guess incorrect, alert must say too high or too low
// after attempts exhausted, tell user correct answer

// prep for question 6




alert("Wait, I almost forgot! Time for some guessing games! >:) Question 6: You have 4 guesses to guess a number from a random number generator.")
totalQuestions++;





function numberGuesser() {
  console.log(guessNumber)
  // initialize some variables for prepping guessing number game: guessesleft, guessnumber, correctnumber
  var guessesLeft = 4;
  var guessNumber;
  var correctNumber;

  // generate random float, multiply by 10, and round down to generate random number

  var randomNumberZeroToOne = Math.random();
  console.log("Random number 0-1 generated: " + randomNumberZeroToOne);
  correctNumber = Math.ceil((10 * (randomNumberZeroToOne)));
  console.log("Correct number: " + correctNumber);

  // prompt user at least once for a guess
  do {

    // prompt for input
    guessNumber = prompt("Take your guess! 1-10 only");

    // convert number to integer
    guessNumber = parseInt(guessNumber);
    console.log("guessNumber: " + guessNumber);

    // if guess too low, alert too low and increment guesses, if guess too high, alert too high and increment guesses, if NaN, alert ?, else alert correct and break out of do/while
    if (guessNumber < correctNumber) {
      guessesLeft--;
      alert("Too low! " + guessesLeft + " guesses remaining.");
      console.log("guesses left: " + guessesLeft);
    }
    else if (guessNumber > correctNumber) {
      guessesLeft--;
      alert("Too high! " + guessesLeft + " guesses remaining.");
      console.log("guesses left: " + guessesLeft);
    }
    else if (Number.isNaN(guessNumber) === true) {
      guessesLeft--;
      alert("??? " + guessesLeft + " guesses remaining.");
      console.log("guesses left: " + guessesLeft);
    }
    // correct
    else {
      alert("NICE GUESS!!! It was " + guessNumber + ". 5 points to Gryffindor!!");
      scoreCounter++;
      console.log("score: " + scoreCounter);
      break;
    }

    if (guessesLeft === 0) {
      alert("Sorry! Out of guesses. The correct number is " + correctNumber);
      break;
    }

  }
  while (guessNumber !== correctNumber && guessesLeft > 0);
}
numberGuesser();








alert("Glad you got that out of the way, huh? Time for one last game.");



// 7th question:
// multiple correct answers stored in an array
// 6 guesses allowed to guess correct answer
// ends when user guesses correct answer or if run out of attempts
// after, display all correct answers

alert("Question 7: This time, you're going to guess one of my top 10 favorite bands/artists.");
totalQuestions++;

// initialize array of bands, guesses left, and flag to break out
var favoriteBandsList = ["The Beatles", "Jimi Hendrix", "Led Zeppelin", "Van Halen", "Queen", "Eric Clapton", "Tame Impala", "Elton John", "Billy Joel", "Muse"];

// 6 guesses
var bandGuessesLeft = 6;

// testing array has string values
console.log("array band list length: " + favoriteBandsList.length);
for (var i = 0; i < favoriteBandsList.length; i++) {
  console.log("band name at array[" + i + "]: " + favoriteBandsList[i]);
}

// set flag to false
var correctGuessExit = false;

do {

  // prompt for favorite band
  var guessBand = prompt("What's one of my favorite bands/artists? " + bandGuessesLeft + " guesses remaining. Capitalization and formatting matter!");
  console.log("guessed band name: " + guessBand);

  // lowercase input string for checking answer
  var guessBandLowerCase = guessBand.toLowerCase();

  // more initializing variables
  var favoriteBandLowerCase;

  // run through array to check string match between guess and array; if match, switch flag to true and break out; else try again and increment guesses
  for (var i = 0; i < favoriteBandsList.length; i++) {

    var ithBand = favoriteBandsList[i];
    favoriteBandLowerCase = ithBand.toLowerCase();

    console.log(".tolowercase applied to ith band: " + ithBand.toLowerCase());
    console.log("variable favoriteBandLowerCase for lower cased favorite band[i]: " + favoriteBandLowerCase);
    console.log("flag before check: " + correctGuessExit);

    if (guessBandLowerCase === favoriteBandLowerCase) {

      correctGuessExit = true;
      console.log("response correct: flag changed to " + correctGuessExit);

      alert("NICE! I love " + favoriteBandsList[i] + ". Rock on!");
      console.log("array match: " + favoriteBandsList[i]);

      scoreCounter++;
      console.log("score: " + scoreCounter);

      break;

    }
  }

  // if flag is changed to true, break out of do-while; else redo the loop
  if (correctGuessExit === true) {
    console.log("break out of do-while because flag is: " + correctGuessExit);
    break;
  }

  else {

    bandGuessesLeft--;

    // if guesses > 0, redo the loop
    if (bandGuessesLeft !== 0) {
      alert("Nope, try again!");

      console.log("guesses left nope try again: " + bandGuessesLeft);
    }

    // if out of guesses, break out of loop
    if (bandGuessesLeft === 0) {
      alert("Sorry, out of guesses!");

      console.log("guesses left sorry out of guesses: " + bandGuessesLeft);
      break;
    }

  }

}
while (bandGuessesLeft > 0 && favoriteBandLowerCase !== guessBandLowerCase);


// display top 10 bands
// for loop iterating through array, access each element 0-9
// store ith element of array in a variable
// concatenate that variable to an empty list
// repeat until i is at 10th string
// if on the very first iteration, add the first element to the empty list
// if on any iteration except the 2nd to last and, just add commas after the current list
// if on the 2nd to last iteration, add an "and" after the current list
// when on the last iteration, add the last band to the list and a period


var listOfBandsSoFar = "";
console.log("initialize list of bands: " + listOfBandsSoFar);
for (var i = 0; i < favoriteBandsList.length; i++) {
  var currentElementInArray = favoriteBandsList[i];

  if (i === 0) {
    listOfBandsSoFar = listOfBandsSoFar + currentElementInArray;
    console.log("listOfBandsSoFar at " + i + "th iteration: " + listOfBandsSoFar);
    continue;
  }

  else if (i === (favoriteBandsList.length - 1)) {
    listOfBandsSoFar = listOfBandsSoFar + " and " + currentElementInArray + ".";
    console.log("listOfBandsSoFar at " + i + "th iteration: " + listOfBandsSoFar);
    continue;
  }

  else if (i < favoriteBandsList.length && i !== favoriteBandsList.length) {
    listOfBandsSoFar = listOfBandsSoFar + ", " + currentElementInArray;
    console.log("listOfBandsSoFar at " + i + "th iteration: " + listOfBandsSoFar);
    continue;
  }
}
alert("My 10 favorite bands are: " + listOfBandsSoFar);

// display points earned out of total points
alert("You got " + scoreCounter + "/" + totalQuestions + " right.");
console.log("score: " + scoreCounter + "/" + totalQuestions); 