// Step 1: create an array and object with the questions...
// Note to self... https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
// Manipulation of js - objects

let questions = [
{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},
{
    title: "The condition in an if / else statement is enclosed within ______.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
},
{
    title: "Arrays in Javascript can be used to store______.",
    choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
    answer: "all the above"
},
{
    title: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
},

];

//Declaration of values to use later
let score = 0
let questionIndex = 0;


//Step 2: Fetch Elements from DOM to work with them.

//Fetch from DOM --> id currentTime
var currentTime = document.getElementById("currentTime");

//Fetch from DOM --> id startTime
let timer = document.getElementById("startTime");

//Fetch from DOM --> id questionsDiv
let questionsDiv = document.getElementById("questionsDiv");

//Fetch from DOM --> id wrapper
let wrapper = document.getElementById("wrapper");


//Step 3: Add timing capacity variables

//Variable seconds left is 15 per question, times 5 questions = 75, plus 1 to substract = 76
let secondsLeft = 6;

//Variable to hold interval time
let holdInterval = 0;

//Variable to hold penalty time
let penalty = 10;


// Need to create a new ul element to append questions and answers.
var ulCreate = document.createElement("ul");


// Step 4: Functionality

// Adding to the "Start Quiz" button an event listener that triggers the countdown clock.
timer.addEventListener("click", function() {

    if (holdInterval === 0) {

        // setInterval will start the countdown and execute the timer.
        holdInterval = setInterval(function () {
            //substract one second of variable seconds left
            secondsLeft--;
            //change text of current time to appear that the backward clock is ticking
            currentTime.textContent = "Time: " + secondsLeft;

            //add functionality to change the countdown clock to "Time's up" when it gets to 0 seconds.
            if (secondsLeft <=0) {
                //stop the setInterval once secondsLeft reaches 0
                clearInterval(holdInterval);
                //change object currentTime and add text Time's up.
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }

    //Calling function render so that it displays questions in the page
    render(questionIndex);
});

//Defining function render
function render (questionIndex) {
    //Clear existing data: fetch questionsDiv and ulCreate and add blank string
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    //Do a for loop to go through all info in the array defined at begining
    for (let i = 0; i < questions.length; i++) {
        // var fetches and stores the question from the array / object
        var userQuestion = questions[questionIndex].title;
        // var fetches and stores the answers from the array / object
        var userChoices = questions[questionIndex].choices;
        // changes the text to display the question
        questionsDiv.textContent = userQuestion;
    }

    // Here go the answers...
    // call function with parameter newItem for each element in the userChoices array
    userChoices.forEach( function (newItem) {
        //create an li element to display answers
        var listItem = document.createElement("li");
        //append to display it
        listItem.textContent = newItem;
        //append the unordered list as a child
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        // MISSING making answers a button and adding functionality with event listner to selected answer.
    
    }
    )
}
